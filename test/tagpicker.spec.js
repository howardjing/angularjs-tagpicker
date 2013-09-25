describe('tagpicker', function() {
  var elem, scope;

  beforeEach(module('tagpicker'));
  beforeEach(module('templates/tagpicker.html'));

  beforeEach(inject(function($rootScope, $compile) {
    elem = angular.element('<tagpicker tags="tagsArray"></tagpicker>');
    scope = $rootScope;
    scope.tagsArray = ['sup', 'bro', 'cool'];
    $compile(elem)(scope);
    scope.$digest();
  }));

  it('should display existing tags', function() {
    var tags = elem.find('.tag');
    expect(tags.length).toBe(3);
  });
});