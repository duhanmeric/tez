from moviepy.editor import *


def insertTextClip(arr):
    if (isinstance(arr, list) == False):
        return "Error: You must pass an array."

    videoLayers = []

    for textClip in arr:
        print(textClip.text, textClip.start, textClip.end)
        txt_clip = TextClip(textClip.text.strip(), size=(300, 300), fontsize=42, color='white', font="Dubai-Bold").set_pos(
            ("center", 100)).set_start(textClip.start).set_end(textClip.end)
        videoLayers.append(txt_clip)

    return videoLayers
