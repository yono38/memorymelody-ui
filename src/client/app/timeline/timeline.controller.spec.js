/* jshint -W117, -W030 */
describe('TimelineController', function() {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.timeline');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getConcerts').returns($q.when(people));
        controller = $controller('TimelineController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Timeline controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Timeline', function () {
                expect(controller.title).to.equal('Timeline');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have at least 1 person', function () {
                expect(controller.concerts).to.have.length.above(0);
            });

        });
    });
});
