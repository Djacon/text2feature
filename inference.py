import torch
from transformers import BertForSequenceClassification, AutoTokenizer
from transformers import PegasusForConditionalGeneration, PegasusTokenizer

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


path_sum = './models/summarizer/'
model_sum = PegasusForConditionalGeneration.from_pretrained(path_sum)
tokenizer_sum = PegasusTokenizer.from_pretrained(path_sum)


def predict_summarization(text: str) -> str:
    batch = tokenizer_sum([text], truncation=True, padding="longest",
                          return_tensors="pt")
    translated = model_sum.generate(**batch)
    return tokenizer_sum.batch_decode(translated, skip_special_tokens=True)[0]


def test():
    predict_emotions('I am so happy now!')
    print('\n>>> Emotion Detection successfully initialized! <<<\n')

    predict_summarization('I am so happy now!')
    print('\n>>> Pegasus successfully initialized! <<<\n')


test()
