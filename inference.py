import torch
from transformers import BertForSequenceClassification, AutoTokenizer

from extract import summarize_text as predict_summarization

# path_emo = 'Djacon/rubert-tiny2-russian-emotion-detection'
path_emo = './models/emotion_detection/'
model_emo = BertForSequenceClassification.from_pretrained(path_emo)
tokenizer_emo = AutoTokenizer.from_pretrained(path_emo)

LABELS = ['Neutral', 'Joy', 'Sadness', 'Anger', 'Enthusiasm', 'Surprise', 'Disgust', 'Fear', 'Guilt', 'Shame']


# Probabilistic prediction of emotion in a text
@torch.no_grad()
def predict_emotions(text: str) -> str:
    inputs = tokenizer_emo(text, max_length=512, truncation=True,
                           return_tensors='pt')

    outputs = model_emo(**inputs)

    pred = torch.nn.functional.sigmoid(outputs.logits)

    emotions_list = {}
    for i in range(len(pred[0].tolist())):
        emotions_list[LABELS[i]] = round(100 * pred[0].tolist()[i], 2)
    return '\n'.join(f"{k}: {v}%" for k, v in sorted(emotions_list.items(),
                                                    key=lambda x: -x[1]))

# path_gram = 'Djacon/mbert-gram'
path_gram = './models/mbert-gram/'
model_gram = BertForSequenceClassification.from_pretrained(path_gram)
tokenizer_gram = AutoTokenizer.from_pretrained(path_gram)


@torch.no_grad()
def predict_acceptance(text: str) -> str:
    inputs = tokenizer_gram(text, truncation=True, return_tensors='pt')
    output = model_gram(**inputs).logits[0]
    pred = torch.nn.functional.softmax(output, dim=0)[1]
    return f'Acceptance: {100 * pred.item():.2f}%'


def test():
    predict_emotions('I am so happy now!')
    print('\n>>> Emotion Detection successfully initialized! <<<')

    predict_summarization('I am so happy now!')
    print('>>> Extractive Summarizer successfully initialized! <<<')

    predict_acceptance('I am so happy now!')
    print('>>> Grammar Checker successfully initialized! <<<\n')


test()
