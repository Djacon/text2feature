from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles

from youtube import get_youtube_caption
from inference import predict_emotions

app = FastAPI()

app.mount("/static", StaticFiles(directory='static', html=True))


@app.get('/')
async def redirect_to_static_index():
    return RedirectResponse(url='/static/index.html')


class EmotionRequest(BaseModel):
    sum_type: str
    text: str


@app.post('/predict_emotion')
async def predict(request: EmotionRequest):
    if request.sum_type == 'sum-video':
        text = get_youtube_caption(request.text)
        if not text:
            return 'Invalid Link'
        elif text == 'err':  # maybe this'll never happen, but who knows, huh?
            return 'Something goes wrong...'
        elif text == 'no-cap':
            return "Unfortunately, this youtube video doesn't contain captions"
    else:
        text = request.text
    return predict_emotions(request.text)
