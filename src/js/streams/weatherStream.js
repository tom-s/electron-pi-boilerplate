import _ from 'lodash'
import request from 'superagent'

require('superagent-jsonp')(request);

// Stream
let WeatherStream;

export default WeatherStream {
    constructor() {
        /*
        return Bacon.once().merge(Bacon.interval(1800 * 1000)).flatMap(this._fetchWeather).map(weathers => {
            return _.map(weathers, function(res) {
                return res.body.currently
            });
        })*/
    }

    _fetchWeather() {
        /*
        var now = Math.round((new Date()).getTime() / 1000);
        var interval = 7200;
        return Bacon.combineAsArray(
            Bacon.fromPromise(request
                    .get('https://api.forecast.io/forecast/a74e8df1fad1212a4a0dcb3f2dd45a61/37.8267,-122.423,'+now)
                    .jsonp()
            ),
            Bacon.fromPromise(request
                    .get('https://api.forecast.io/forecast/a74e8df1fad1212a4a0dcb3f2dd45a61/37.8267,-122.423,'+ (now+interval))
                    .jsonp()
            ),
            Bacon.fromPromise(request
                    .get('https://api.forecast.io/forecast/a74e8df1fad1212a4a0dcb3f2dd45a61/37.8267,-122.423,'+ (now+interval*2))
                    .jsonp()
            ),
            Bacon.fromPromise(request
                    .get('https://api.forecast.io/forecast/a74e8df1fad1212a4a0dcb3f2dd45a61/37.8267,-122.423,'+ (now+interval*3))
                    .jsonp()
            ),
            Bacon.fromPromise(request
                    .get('https://api.forecast.io/forecast/a74e8df1fad1212a4a0dcb3f2dd45a61/37.8267,-122.423,'+ (now+interval*4))
                    .jsonp()
            )
        );*/
    }

}

