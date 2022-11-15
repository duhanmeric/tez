import os
from time import sleep
from utils.get_save_folders import get_save_folders
from controllers.video_controller import main
import uuid
from flask import Flask
from flask_cors import CORS
import flask

app = Flask(__name__)
app.config.from_object(__name__)
app.config['UPLOAD_FOLDER'] = get_save_folders("tmp_videos")

CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/upload-file", methods=["POST"])
def greetings():
    files = flask.request.files.getlist("file")

    for file in files:
        unique_filename = str(uuid.uuid4())
        file_extension = os.path.splitext(file.filename)[1]
        LAST_VIDEO_PATH = os.path.join(get_save_folders(
            "tmp_videos"), unique_filename + file_extension)
        file.save(LAST_VIDEO_PATH)
        main(LAST_VIDEO_PATH, unique_filename, file_extension)

    return unique_filename


if __name__ == "__main__":
    app.run(debug=True)
