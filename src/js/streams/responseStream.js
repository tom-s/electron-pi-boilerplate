import _ from 'lodash'
import Rx from 'rx'
import request from 'superagent'

// Streams
import SpeechToTextStream from './speechToTextStream.js'

// Actions
import Time from './actions/time.js'
import Wikipedia from './actions/wikipedia.js'


let ResponseStream = (() => {
    let speechStream = SpeechToTextStream.stream;

    function _filter(data) {
        var text = _.get(data, 'result.final');
        return !!text;
    }

    function _handleResponse(response) {
        var speech = _.get(response, 'body.result.speech');
        if(speech) {
            return  Rx.Observable.just({
                response: speech
            });
        } else {
            var action = _.get(response, 'body.result.action');
            var parameters = _.get(response, 'body.result.parameters');
            if(action) {
                return _handleAction(action, parameters);
            }
        }
        return null
    }

    function _handleAction(action, parameters) {
        console.log("_handleAction", action, parameters);
        switch(action) {
            /* Text reponses */
            case 'clock.time':
                return Rx.Observable.fromPromise(Time.getTimeByLocation(parameters.location)).map((response) => {return {response: response, action: null};});
            case 'web.search':
                return Rx.Observable.fromPromise(Wikipedia.search(parameters.q)).map((response) => {return {response: response, action: null};});
            /* All other actions */
            default: 
                return Rx.Observable.just({
                    response: null,
                    action: action, 
                    parameters: parameters
                });
        }
    }

    function _fetchResponse(data) {
        console.log("fethc response for data", data);
        var text = _.get(data, 'result.final');
        return Rx.Observable.fromPromise(
            request
                .post('https://api.api.ai/v1/query')
                .send({
                    query: text,
                    "timezone" : "GMT+1",
                    "lang": "en"
                })
                .set('Authorization', 'Bearer e49a1abdd3ce4f708c2ccc7d15891c31')
                .set('ocp-apim-subscription-key', '9fcdf7db-4157-459c-b9a9-3172bf2474b4')
                .set('Content-Type', 'application/json; charset=utf-8')
                .set('Accept', 'application/json')
        );
    }

    // Stream
    return speechStream.filter(_filter).distinct((data) => { return data.result.final; })
        .flatMapLatest(_fetchResponse).flatMapLatest(_handleResponse); //.publish().refCount();
})();

export default ResponseStream;

