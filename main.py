from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles

from youtube import get_youtube_caption
from inference import predict_emotions, predict_summarization

MAX_ITER_SIZE = 3000

app = FastAPI()

app.mount("/static", StaticFiles(directory='static', html=True))


@app.get('/')
async def redirect_to_static_index():
    return RedirectResponse(url='/static/index.html')


class EmotionRequest(BaseModel):
    sum_type: str
    text: str


@app.post('/predict_emotion')
async def predict_emo(request: EmotionRequest):
    if request.sum_type == 'sum-video':
        text = get_youtube_caption(request.text)
        if not text:
            return 'Invalid Link'
        elif text == 'err':
            return 'Something goes wrong...'
        elif text == 'no-cap':
            return "Unfortunately, this youtube video doesn't contain captions"
    else:
        text = request.text
    return predict_emotions(text)


@app.post('/predict_summarization')
async def predict_sum(request: EmotionRequest):
    if request.sum_type == 'sum-video':
        text = get_youtube_caption(request.text)
        if not text:
            return 'Invalid Link'
        elif text == 'err':
            return 'Something goes wrong...'
        elif text == 'no-cap':
            return "Unfortunately, this youtube video doesn't contain captions"
    else:
        text = request.text

    try:
        if len(text) < MAX_ITER_SIZE:
            return predict_summarization(text)

        arr = []
        for i in range(min(len(text), 20_000) // MAX_ITER_SIZE):
            res = predict_summarization(
                text[MAX_ITER_SIZE*i:MAX_ITER_SIZE*(i+1)]).replace('\n', ' ')
            res = f'{res[0].upper()}{res[1:]}'
            arr.append(res)
        return '\n\n'.join(arr)
    except Exception as e:
        print('ERR:', e)
        return 'Something goes wrong...'
