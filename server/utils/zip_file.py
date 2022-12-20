import os
from time import sleep
from zipfile import ZipFile
from utils.remove_media import remove_media
from utils.get_save_folders import get_save_folders


def zipFiles(unique_filename):
    zip_path = os.path.realpath(os.path.join(
        os.getcwd(), os.path.join("data"), f"zips/{unique_filename}.zip"))

    will_removed_files = []
    with ZipFile(zip_path, 'w') as zipObj:
        for folderName, subfolders, filenames in os.walk(get_save_folders("outputs")):
            for filename in filenames:
                filePath = os.path.join(folderName, filename)
                print("ziplenen dosya: ", filePath, os.path.basename(filePath))
                zipObj.write(filePath, os.path.basename(filePath))
                will_removed_files.append(os.path.splitext(filename)[0])
    sleep(3)

    remove_media(will_removed_files)
