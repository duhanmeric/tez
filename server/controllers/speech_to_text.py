import os
from google.cloud import speech
from google.cloud import speech_v1p1beta1 as speech

from models.CustomTextClip import CustomTextClip


client = speech.SpeechClient.from_service_account_file(
    os.path.realpath(os.path.join(os.getcwd(), "key.json")))

alternative_langs = ["tr-TR"]


def speechToText(filename):
    words = []

    with open(filename, "rb") as f:
        audio_data = f.read()
    audio_file = speech.RecognitionAudio(content=audio_data)

    config = speech.RecognitionConfig(
        sample_rate_hertz=44100,
        enable_automatic_punctuation=True,
        language_code="en-US",
        alternative_language_codes=alternative_langs,
        enable_word_time_offsets=True,
    )

    response = client.recognize(
        config=config,
        audio=audio_file
    )

    for result in response.results:
        alternative = result.alternatives[0]
        print("Transcript: {}".format(alternative.transcript))
        print("Confidence: {}".format(alternative.confidence))

        for word_info in alternative.words:

            word = word_info.word
            start_time = word_info.start_time.total_seconds()
            end_time = word_info.end_time.total_seconds()

            words.append(CustomTextClip(word, start_time, end_time))

    return words
