import _ from 'lodash'
import Rx from 'rx'
import request from 'superagent'

// Streams
import SpeechToTextStream from './speechToTextStream.js'

export default class ResponseStream {
    constructor() {
        var speechStream = SpeechToTextStream.stream;

        return speechStream.filter(this._filter).debounce(200).flatMapLatest(this._fetchResponse).map(response => {
           return response.body;
        })
    }

    _filter(data) {
        var text = _.get(data, 'result.final');
        return !!text;
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

