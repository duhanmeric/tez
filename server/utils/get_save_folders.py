import os


def get_save_folders(folder_type):

    data_types = [
        "tmp_videos",
        "audios",
        "zips",
        "outputs"
    ]

    for type in data_types:
        if folder_type == type:
            return os.path.realpath(os.path.join(os.getcwd(), os.path.join("data"), type))
    return "You need to pass an argument for the type ('tmp_videos' or 'audios')"
