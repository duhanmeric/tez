import codecs
from moviepy.editor import *
from controllers.register_audio import registerAudio
from utils.get_save_folders import get_save_folders
import os


def main(last_video_path, filename, video_extension):
    videoClip = VideoFileClip(last_video_path)

    # tmp_videos path'inden mp3 dosyası olusturma
    getAudioPath = registerAudio(filename)
    audioClip = videoClip.audio
    audioClip.write_audiofile(getAudioPath)

    # ilerde videoya entegre ilerde basilacak kelimeler simdilik bos
    words = []

    # uzerine kelimeler eklenmis video dosyası ve ileride ziplenecek dosya
    # outputs'a kaydediliyor
    videoClip.write_videofile(os.path.join(get_save_folders(
        "outputs"), f"{filename+video_extension}"), logger=None)
    videoClip.close()
