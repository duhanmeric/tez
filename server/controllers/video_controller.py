import codecs
from moviepy.editor import *
from controllers.register_audio import registerAudio
from controllers.insert_text_clip import insertTextClip
from controllers.speech_to_text import speechToText
from utils.get_save_folders import get_save_folders
import os


def main(last_video_path, filename, video_extension):
    videoClip = VideoFileClip(last_video_path)

    getAudioPath = registerAudio(filename)
    videoClip.audio.write_audiofile(getAudioPath)

    words = speechToText(getAudioPath)
    # words = []

    videoLayers = insertTextClip(words)
    videoLayers.insert(0, videoClip)

    video = CompositeVideoClip(clips=videoLayers)
    # video.write_videofile(os.path.join(get_save_folders(
    #     "outputs"), f"{filename+video_extension}"), logger=None)
    video.write_videofile(os.path.join(get_save_folders(
        "outputs"), f"{filename+video_extension}"),
        codec='libx264',
        audio_codec='aac',
        # temp_audiofile='temp-audio.m4a',
        # remove_temp=True
    )
    video.close()
