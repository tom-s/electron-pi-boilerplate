import _ from 'lodash'
import Rx from 'rx'
import request from 'superagent'

// Streams
import SpeechToTextStream from './speechToTextStream.js'

// Utils
import Time from '../utils/time.js'

export default class ResponseStream {
    constructor() {
        var speechStream = SpeechToTextStream.stream;

        return speechStream.filter(this._filter).debounce(200).flatMapLatest(this._fetchResponse).flatMapLatest(this._handleResponse.bind(this)).map((res) => {
            console.log("RES", res);
            return res;
        }).publish().refCount();
    }

    _filter(data) {
        var text = _.get(data, 'result.final');
        return !!text;
    }

    _handleResponse(response) {
        var speech = _.get(response, 'body.result.speech');
        if(speech) {
            return  Rx.Observable.just(speech);
        } else {
            var action = _.get(response, 'body.result.action');
            var parameters = _.get(response, 'body.result.parameters');
            if(action) {
                return this._handleAction(action, parameters);
            }
        }
        return null
    }

    _handleAction(action, parameters) {
        console.log("handle action", action, parameters);
        switch(action) {
            case 'clock.time' :
                return Rx.Observable.fromPromise(Time.getTimeByLocation(parameters.location));
        }
    }

    _fetchResponse(data) {
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

}

