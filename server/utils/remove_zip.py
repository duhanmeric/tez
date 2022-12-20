import os
from utils.get_save_folders import get_save_folders


zip_path = get_save_folders("zips")


def remove_zip(filename):
    print(filename)
    for root, dirs, files in os.walk(zip_path):
        for file in files:
            if filename == os.path.splitext(file)[0]:
                print(os.path.join(root, file))
                os.remove(os.path.join(root, file))
