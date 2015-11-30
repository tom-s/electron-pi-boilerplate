import Bacon from 'baconjs'
import socket from '../utils/socket.js'

/* This is a singleton because stream need to  be controlled by shared components */
export default (function() {
    var speechToText = {};

    // Set recognition
    speechToText.recognition = new webkitSpeechRecognition();
    speechToText.recognition.continuous = false;
    speechToText.recognition.interimResults = true;
    speechToText.recognition.lang = 'en-GB';

    // Define streams
    var start = Bacon.fromEventTarget(speechToText.recognition, 'start');
    var error = Bacon.fromEventTarget(speechToText.recognition, 'error');
    var end = Bacon.fromEventTarget(speechToText.recognition, 'end');
    var result = Bacon.fromEventTarget(speechToText.recognition, 'result');

    speechToText.active = Bacon.once(false).merge(start.map(true).merge(error.map(false)).merge(end.map(false)));
    speechToText.result = Bacon.once({finalSpeech: '', tempSpeech: '', active: false}).merge(result.map((event) => {
        var tempTranscript = '';
        var finalTranscript = '';

        if (typeof(event.results) == 'undefined') {
            speechToText.recognition.onend = null;
            speechToText.recognition.stop();
            return;
        }
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                tempTranscript += event.results[i][0].transcript;
            }
        }

        return {
            temp: tempTranscript,
            final: finalTranscript,
            active: false
        }
    }));


    speechToText.start = function() {
        speechToText.recognition.start();
    }

    speechToText.stream = Bacon.combineTemplate({
            active: speechToText.active,
            result: speechToText.result
    });

    return speechToText;
})();