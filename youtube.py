from youtube_transcript_api import YouTubeTranscriptApi

MAX_SIZE = 25_000


def _extract_video_id(url: str) -> str:
    if not url.startswith('https://www.youtube.com/watch?'):
        return ''

    res = url.split('v=')
    if len(res) < 2:
        return ''

    ind = res[1].find('&')
    ind = len(res[1]) if ind == -1 else ind
    return res[1][:ind]


def get_youtube_caption(url: str) -> str:
    video_id = _extract_video_id(url)
    if not video_id:
        return ''

    res = []
    size = 0
    for transcript in YouTubeTranscriptApi.get_transcript(video_id):
        res.append(transcript['text'])
        size += len(transcript['text'])
        if size >= MAX_SIZE:
            return ' '.join(res)
    return ' '.join(res)
