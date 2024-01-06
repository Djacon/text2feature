import os
import nltk

from nltk.cluster.util import cosine_distance
from nltk.tokenize import sent_tokenize, word_tokenize

import numpy as np

# English + Russian stopwords
STOPLST = {'been', 'себя', 'that', 'were', 'она', 'им', 'ourselves', "you'd", 'если', 'she', 'have', 'herself', "aren't", 'before', 's', 'this', 'very', 'does', 'an', 'меня', 'between', "hasn't", 'был', 'other', 'иногда', 'их', 'будто', 'with', 'himself', 'раз', 'once', 'чтобы', 'в', 'hers', 'down', 'a', 'can', 'during', 'theirs', 'с', 'тебя', 'when', 'такой', 'свою', 'hadn', 'нибудь', 'из', 'these', 'aren', 'эти', 'any', 'конечно', 'themselves', 'при', 'each', "mustn't", 'все', 'y', 'перед', 'куда', 'doesn', 'yourselves', 'but', "shan't", 'his', 'всегда', 'другой', 'to', 'him', 'nor', 'эту', 'he', 'была', 'один', 'ней', 'нее', 'they', 'него', 'who', 'вас', 'надо', 'того', 'if', 'под', 'них', 'какой', 'через', 'from', 'этого', 'didn', 'in', 'тут', 'wasn', "you've", 'shan', 'isn', 'будет', 'ничего', 'for', 'когда', 'только', 'между', 'our', 'уж', 'your', 'много', 'ли', 'чтоб', 'own', 'i', 'хорошо', 'вот', 'чем', 'it', 'ни', 'being', 'а', 'of', 'where', 'то', 'all', "shouldn't", "hadn't", 'мой', "should've", "it's", 'так', 'shouldn', 'than', 'most', "haven't", 'ma', 'об', 'my', 'so', 'мы', 'нельзя', 'after', 'too', 'which', 'теперь', 'above', 'was', 'until', 'what', 'тот', 'myself', "that'll", 'кто', 'those', 'o', 'has', "you'll", 'про', 'чуть', 'mightn', 'вы', 'без', 'со', 'some', 'ain', 'том', 'более', 'какая', 'потому', 'should', 'more', 'd', 'their', 'почти', "wasn't", 'while', 'me', 'up', 'am', 'only', 'is', 'себе', 'они', 'было', 'do', 'doing', 'что', 'through', "doesn't", 'its', 'к', "don't", 'этот', 'ours', 'ним', 'couldn', 'есть', 'not', 'у', 'ты', "isn't", 're', 'как', 'ее', 'yours', 'there', 'ему', 'll', 'больше', 't', 'off', 'into', 'having', 'ей', 'ну', "mightn't", 'хоть', 'всех', 'hasn', 'few', 'no', 'над', "wouldn't", 'at', 'сейчас', 'itself', 'whom', 'why', 'вдруг', 'опять', 'где', 'over', 'm', 'чего', 'и', 'всю', 'how', 'я', 'don', 'или', 'два', "you're", 'out', 'we', 'за', 'both', 'had', 'не', 'now', 'до', 'может', 'same', 'did', 'же', 'her', 'никогда', "needn't", 'further', 'наконец', 'and', "won't", 'быть', 'совсем', 'then', 'will', 'о', 'below', 'бы', 'about', 'по', 'won', 'them', 'на', 'зачем', 'тогда', 'были', 'under', 'от', 'его', 'on', 'mustn', 'нас', 'wouldn', 'разве', 'впрочем', "weren't", 'после', 'этом', 'by', 'the', 'you', 'тоже', 'be', 'моя', 'are', 'needn', 'можно', 'weren', 'ведь', 'лучше', 'нет', "she's", 'мне', 'or', 'just', 've', 'там', "couldn't", 'тем', 'но', 'потом', "didn't", 'для', 'три', 'yourself', 'всего', 'ж', 'он', 'во', 'haven', 'уже', 'against', 'еще', 'даже', 'здесь', 'вам', 'as', 'such', 'сам', 'да', 'этой', 'because', 'again', 'here'}

def load_text(filename):
    with open(filename, encoding='utf-8') as f:
        text = f.read()
    return text


def preprocess(sentences: list) -> list:
    return [[word.lower() for word in word_tokenize(sentence) if word.isalpha()
             and word not in STOPLST] for sentence in sentences]


def similarity(sent1, sent2):
    all_words = list(set(sent1 + sent2))

    vector1 = [0] * len(all_words)
    vector2 = [0] * len(all_words)

    for w in sent1:
        vector1[all_words.index(w)] += 1

    for w in sent2:
        vector2[all_words.index(w)] += 1

    return cosine_distance(vector1, vector2)


def build_matrix(sentences):
    sents = preprocess(sentences)
    size = len(sents)
    mat = np.zeros(size)
    for i in range(size):
        for j in range(i+1, size):
            sim = similarity(sents[i], sents[j])
            mat[i] += sim
            mat[j] += sim
    return mat / size


def get_pagerank(importance, top_k):
    idx = importance.argsort()[:top_k]
    idx.sort()
    return idx


def summarize_text(text: str) -> str:
    # return text
    sentences = sent_tokenize(text)[:2000]
    top_k = max(20, int(len(sentences) ** .5))
    mat = build_matrix(sentences)
    idx = get_pagerank(mat, top_k)
    return '\n'.join(sentences[i] for i in idx)
