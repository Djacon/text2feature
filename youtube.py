import re
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import TranscriptsDisabled

MAX_SIZE = 50_000
YT_REGEX = r'^((http)s?:\/\/)?((www\.)|(m\.))?youtube.com\/watch\?([^\?]*&)?v=.+$'  # noqa
YT_REGEX_SHORT = r'^((http)s?:\/\/)?youtu.be\/([^\?=]+)(\?[^?]+)?$'


def _extract_video_id(url: str) -> str:
    if not re.match(YT_REGEX, url):
        if not re.match(YT_REGEX_SHORT, url):
            return ''

        ind = url.find('?')
        ind = len(url) if ind == -1 else ind
        return url[url.find('e/')+2:ind]

    res = url.split('v=')
    ind = res[1].find('&')
    ind = len(res[1]) if ind == -1 else ind
    return res[1][:ind]


def get_youtube_caption(url: str) -> str:
    try:
        video_id = _extract_video_id(url)
        if not video_id:
            return ''

        res, size = [], 0
        for transcript in YouTubeTranscriptApi.get_transcript(video_id):
            res.append(transcript['text'].replace('\n', ' '))
            size += len(transcript['text'])
            if size >= MAX_SIZE:
                return ' '.join(res)[:MAX_SIZE]
        return ' '.join(res)[:MAX_SIZE]
    except TranscriptsDisabled:
        return 'no-cap'
    except Exception:
        return 'err'

