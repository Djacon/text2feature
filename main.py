from fastapi import FastAPI, Request
from pydantic import BaseModel
from jinja2 import TemplateNotFound
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from youtube import get_youtube_caption
from inference import predict_emotions, predict_summarization

MAX_ITER_SIZE = 3000

app = FastAPI(docs_url=None, redoc_url=None)
app.mount("/files", StaticFiles(directory="files"), name="files")
templates = Jinja2Templates(directory="static")


@app.exception_handler(TemplateNotFound)
async def not_found_exception_handler(request: Request, exc: TemplateNotFound):
    return templates.TemplateResponse("404.html", {"request": request},
                                      status_code=404)


@app.get("/", response_class=HTMLResponse)
async def read_homepage(request: Request):
    return templates.TemplateResponse(f"index.html", {"request": request,
                                                      "page": "index"})


@app.get("/{page}", response_class=HTMLResponse)
async def read_html(request: Request, page: str = 'index'):
    if page.endswith(".html"):
        page = page[:-5]
    return templates.TemplateResponse(f"{page}.html", {"request": request,
                                                       "page": page})


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
