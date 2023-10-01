from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles

from inference import predict_emotions

app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=allowed_hosts,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

app.mount("/static", StaticFiles(directory='static', html=True))


@app.get('/')
async def redirect_to_static_index():
    return RedirectResponse(url='/static/index.html')


class EmotionRequest(BaseModel):
    text: str


@app.post('/predict_emotion')
async def predict(request: EmotionRequest):
    return predict_emotions(request.text)
