/* jshint -W117, -W030 */
describe('timeline routes', function () {
    describe('state', function () {
        var view = 'app/timeline/timeline.html';

        beforeEach(function() {
            module('app.timeline', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state timeline to url / ', function() {
            expect($state.href('timeline', {})).to.equal('/');
        });

        it('should map /timeline route to timeline View template', function () {
            expect($state.get('timeline').templateUrl).to.equal(view);
        });

        it('of timeline should work with $state.go', function () {
            $state.go('timeline');
            $rootScope.$apply();
            expect($state.is('timeline'));
        });
    });
});
