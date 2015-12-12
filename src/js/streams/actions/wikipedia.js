import _ from 'lodash'
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import Q from 'q'
import striptags from 'striptags'

export default (function() {

    function _search(query) {
        var deferred = Q.defer();
        request
            .get('https://en.wikipedia.org/w/api.php')
            .use(jsonp)
            .query({action: 'query'})
            .query({format: 'json'})
            .query({prop: 'extracts'})
            .query({exintro: ''})
            .query({titles: query})
            .end(function (err, response) {
                if(err) {
                    deferred.reject();
                } else {
                    var body = response.body;
                    var pages = _.get(body, '.query.pages');
                    var keys = _.keys(pages);
                    if(keys.length > 0) {
                        deferred.resolve(striptags(pages[keys[0]].extract));
                    } else {
                        deferred.reject();
                    }
                }
            });
        return deferred.promise;
    }

    return {
        search: function(query) {
           return _search(query);
        }
    };
})();

