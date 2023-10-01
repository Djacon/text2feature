import torch
from transformers import BertForSequenceClassification, AutoTokenizer

# path = 'Djacon/rubert-tiny2-russian-emotion-detection'
path = './model/'
model = BertForSequenceClassification.from_pretrained(path)
tokenizer = AutoTokenizer.from_pretrained(path)

LABELS = ['Joy', 'Interest', 'Surprise', 'Sadness', 'Anger', 'Disgust', 'Fear',
          'Guilt', 'Neutral']


# Probabilistic prediction of emotion in a text
@torch.no_grad()
def predict_emotions(text):
    inputs = tokenizer(text, max_length=512, truncation=True,
                       return_tensors='pt')
    inputs = inputs.to(model.device)

    outputs = model(**inputs)

    pred = torch.nn.functional.softmax(outputs.logits, dim=1)

    emotions_list = {}
    for i in range(len(pred[0].tolist())):
        emotions_list[LABELS[i]] = round(100 * pred[0].tolist()[i], 3)
    return emotions_list


def test():
    predict_emotions('I am so happy now!')
    print('\n>>> Emotion Detection successfully initialized! <<<\n')


test()
