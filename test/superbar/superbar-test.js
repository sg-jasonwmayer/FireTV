describe('Superbar', function () {
    var element,
        seg = {};
    beforeEach(function () {
        module('angularStbApp');
        element = angular.element('<superbar/>');
    	inject(function ($rootScope, $compile) {
            var scope = $rootScope.$new();
			scope.feed = [];
			$compile(element)(scope);
			scope.$digest();
		});
    });
    it('should fail', function () {
        //expect(element.text()).toBe('Hello Homer');
    });
});