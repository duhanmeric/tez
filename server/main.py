import os
from flask import Flask
import uuid 
import flask
from controllers.video_controller import main

from utils.get_save_folders import get_save_folders

app = Flask(__name__)


@app.route("/")
def hello_world():
    files = flask.request.files.getlist("file")

    for file in files:
        unique_filename = str(uuid.uuid4())
        file_extension = os.path.splitext(file.filename)[1]
        LAST_VIDEO_PATH = os.path.join(get_save_folders(
            "tmp_videos"), unique_filename + file_extension)
        file.save(LAST_VIDEO_PATH)
        main(LAST_VIDEO_PATH, unique_filename, file_extension)

    return unique_filename


if __name__ == "_main_":
    app.run(debug=True)