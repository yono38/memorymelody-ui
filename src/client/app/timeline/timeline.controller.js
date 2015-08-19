(function () {
    'use strict';

    angular
        .module('app.timeline')
        .controller('TimelineController', TimelineController);

    TimelineController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function TimelineController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'memorymelody',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.concerts = [];
        vm.title = 'Timeline';

        activate();

        function activate() {
            var promises = [getConcerts()];
            return $q.all(promises).then(function() {
                logger.info('Activated Timeline View');
            });
        }

        function getConcerts() {
            return dataservice.getConcerts(true).then(function (data) {
                vm.concerts = data.map(function(c) {
                    return {
                        badgeClass: 'info',
                        badgeIconClass: 'glyphicon-headphones',
                        date: c.date,
                        artist: c.artist,
                        venue: c.venue,
                        notes: c.notes
                    };
                });
                return vm.concerts;
            });
        }
    }
})();
