import torch
import requests
from transformers import BertForSequenceClassification, AutoTokenizer

# path_emo = 'Djacon/rubert-tiny2-russian-emotion-detection'
path_emo = './models/emotion_detection/'
model_emo = BertForSequenceClassification.from_pretrained(path_emo)
tokenizer_emo = AutoTokenizer.from_pretrained(path_emo)

LABELS = ['Joy', 'Interest', 'Surprise', 'Sadness', 'Anger',
          'Disgust', 'Fear', 'Guilt', 'Neutral']


# Probabilistic prediction of emotion in a text
@torch.no_grad()
def predict_emotions(text: str) -> str:
    inputs = tokenizer_emo(text, max_length=512, truncation=True,
                           return_tensors='pt')
    inputs = inputs.to(model_emo.device)

    outputs = model_emo(**inputs)

    pred = torch.nn.functional.softmax(outputs.logits, dim=1)

    emotions_list = {}
    for i in range(len(pred[0].tolist())):
        emotions_list[LABELS[i]] = round(100 * pred[0].tolist()[i], 3)
    return '\n'.join(f'{k}: {v}' for k, v in sorted(emotions_list.items(),
                                                    key=lambda x: -x[1]))


def predict_summarization(text: str) -> str:
    url = "https://www.editpad.org/tool/tool/summarizingTool"
    headers = {"Content-Type": "application/x-www-form-urlencoded"}

    data = {"text": text, "modd": 1, "captha": 0, 'percnt': 10,
            "max-length": len(text) / 10}

    response = requests.post(url, headers=headers, data=data)

    if response.status_code != 200:
        return 'err'

    response_json = response.json()
    print(len(response_json.get('content')), len(text))
    return response_json.get("content", 'err')


def test():
    predict_emotions('I am so happy now!')
    print('\n>>> Emotion Detection successfully initialized! <<<\n')

    predict_summarization('I am so happy now!')
    print('\n>>> Pegasus successfully initialized! <<<\n')


test()
