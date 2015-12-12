import _ from 'lodash'
import request from 'superagent'
import Q from 'q'
import moment from 'moment-timezone'

var GOOGLE_API_URL = 'http://maps.googleapis.com/maps/api/geocode/json';
var GOOGLE_TIMEZONE_API_URL = 'https://maps.googleapis.com/maps/api/timezone/json';

export default (function() {

    function _getTimeZone(coordinates) {
        var deferred = Q.defer();
        var apiUrl = GOOGLE_TIMEZONE_API_URL;
        request.get(apiUrl)
            .query({location: coordinates.lat + ',' + coordinates.lng})
            .query({timestamp:  moment().unix()})
            .end(function (err, response) {
                if(err) {
                    deferred.reject();
                } else {
                    var body = response.body;
                    var timezone = _.get(body, '.timeZoneId');
                    if(timezone) {
                        deferred.resolve(timezone);
                    } else {
                        deferred.reject();
                    }
                }
        });
        return deferred.promise;
    }

    function _getCoordinates(location) {
        var deferred = Q.defer();
        var apiUrl = GOOGLE_API_URL;
        request.get(apiUrl)
            .query({language: 'en'})
            .query({address: location})
            .end(function (err, response) {
                if(err) {
                    deferred.reject();
                } else {
                    var body = response.body;
                    var location = _.get(body, '.results[0].geometry.location');
                    if(location) {
                        deferred.resolve(location);
                    } else {
                        deferred.reject();
                    }
                }
        });
        return deferred.promise;
    }

    return {
        getTimeByLocation: function(location) {
            var deferred = Q.defer();
            if(!location || location.toLowerCase() === 'lyon' || location.toLowerCase() === 'france') {
                deferred.resolve(moment().tz("Europe/Paris").format("h:mm:ss a"));
            } else {
                _getCoordinates(location).then(function success(coordinates) {
                    _getTimeZone(coordinates).then(function success(timezone) {
                        deferred.resolve(moment().tz(timezone).format("h:mm:ss a"));
                    }, function error() {
                        deferred.reject();
                    });
                }, function error() {
                    deferred.reject();
                });
            }
            return deferred.promise;
        }
    };
})();