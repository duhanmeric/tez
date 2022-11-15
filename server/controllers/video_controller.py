import codecs
from moviepy.editor import *
from controllers.register_audio import registerAudio
from utils.get_save_folders import get_save_folders
import os


def main(last_video_path, filename, video_extension):
    videoClip = VideoFileClip(last_video_path)

    getAudioPath = registerAudio(filename)
    audioClip = videoClip.audio
    audioClip.write_audiofile(getAudioPath)

 
    audioClip.close()
    videoClip.close()
