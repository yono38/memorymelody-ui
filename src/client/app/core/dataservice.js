(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var getConcertsUrl = 'http://localhost:7000/api/v1/Concerts?populate=artist,venue&select=date,' +
            'artist.name,venue.name,notes';
        var service = {
            getConcerts: getConcerts,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getConcerts(sortDate) {
            var url = getConcertsUrl;
            if (sortDate) {
                url += '&sort=date';
            }
            return $http.get(url)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getConcerts')(e);
            }
        }
    }
})();
