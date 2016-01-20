import Rx from 'rx'
import socket from '../utils/socket.js'

/* This is a singleton because stream need to  be controlled by shared components -- todo: I DONT THINK THATS NECESSARY*/
export default (function() {
    var speechToText = {};

    // Set recognition
    speechToText.recognition = new webkitSpeechRecognition();
    speechToText.recognition.continuous = false;
    speechToText.recognition.interimResults = true;
    speechToText.recognition.lang = 'en-GB';

    // Define streams
    var start = Rx.Observable.fromEvent(speechToText.recognition, 'start');
    var error = Rx.Observable.fromEvent(speechToText.recognition, 'error');
    var end = Rx.Observable.fromEvent(speechToText.recognition, 'end');
    var result = Rx.Observable.fromEvent(speechToText.recognition, 'result');
    speechToText.active = Rx.Observable.merge(start.map(true), error.map(false), end.map(false)).startWith(false);

    speechToText.result = result.map((event) => {
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
            final: finalTranscript
        }
    }).startWith({
        finalSpeech: '',
        tempSpeech: '',
        active: false
    });


    speechToText.start = function() {
        speechToText.recognition.start();
    };

    speechToText.stream = Rx.Observable.combineLatest(speechToText.active, speechToText.result, (active, result) => {
        return {
            active: active,
            result: result
        }
    });

    return speechToText;
})();