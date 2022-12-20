import os
from time import sleep
from flask import Flask, send_file
import flask
from flask_cors import CORS
from werkzeug.utils import secure_filename
from utils.remove_zip import remove_zip
from utils.zip_file import zipFiles
from utils.get_save_folders import get_save_folders
from controllers.video_controller import main
import uuid
import random

app = Flask(__name__)

app.config.from_object(__name__)
app.config['UPLOAD_FOLDER'] = get_save_folders("tmp_videos")

CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/delete-zip/<zip_name>', methods=["DELETE"])
def delete_zip(zip_name):
    print(zip_name)
    sleep(10)
    remove_zip(zip_name)
    return "delete zip"


@app.route('/download/<zip_name>', methods=["GET"])
def download(zip_name):
    print(zip_name)
    return send_file(os.path.join(get_save_folders('zips'), zip_name + ".zip"), as_attachment=True)


@app.route("/", methods=["POST"])
def greetings():
    files = flask.request.files.getlist("file")
    for file in files:
        unique_filename = str(uuid.uuid4())
        file_extension = os.path.splitext(file.filename)[1]
        LAST_VIDEO_PATH = os.path.join(get_save_folders(
            "tmp_videos"), unique_filename + file_extension)
        file.save(LAST_VIDEO_PATH)
        main(LAST_VIDEO_PATH, unique_filename, file_extension)

    zipFiles(unique_filename)
    return unique_filename


if __name__ == "__main__":
    app.run(debug=True)
