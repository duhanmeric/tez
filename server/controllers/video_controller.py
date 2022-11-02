import codecs
from moviepy.editor import *
from utils.get_save_folders import get_save_folders
import os


def main(last_video_path, filename, video_extension):
    videoClip = VideoFileClip(last_video_path)

    
    video = CompositeVideoClip()
    video.write_videofile(os.path.join(get_save_folders(
        "outputs"), f"{filename+video_extension}"), logger=None)
    video.close()
