
import os
from utils.get_save_folders import get_save_folders


def registerAudio(filename):
    return os.path.join(get_save_folders("audios"), os.path.splitext(filename)[0]) + ".mp3"
