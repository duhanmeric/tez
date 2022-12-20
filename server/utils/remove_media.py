import os

from utils.get_save_folders import get_save_folders

zip_path, tmp_videos_path, audios_path = get_save_folders(
    "zips"), get_save_folders(
    "tmp_videos"), get_save_folders("audios")


def remove_media(filenames):
    current_dir = os.path.realpath(os.path.join(os.getcwd(), "data"))
    for root, dirs, files in os.walk(current_dir):
        for file in files:
            for filename in filenames:
                if filename == os.path.splitext(file)[0] and os.path.splitext(file)[1] != ".zip":
                    os.remove(os.path.join(root, file))
