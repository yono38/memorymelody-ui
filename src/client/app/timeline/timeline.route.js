(function() {
    'use strict';

    angular
        .module('app.timeline')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'timeline',
                config: {
                    url: '/',
                    templateUrl: 'app/timeline/timeline.html',
                    controller: 'TimelineController',
                    controllerAs: 'tl',
                    title: 'timeline',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-history"></i> Timeline'
                    }
                }
            }
        ];
    }
})();
