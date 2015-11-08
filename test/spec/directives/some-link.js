'use strict';

describe('Directive: someLink', function () {
  beforeEach(module('angularjsTestsApp'));

  var element,
      scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have link', inject(function ($compile) {
      element = angular.element('<some-link been-clicked="\'No :(\'"></some-link>');
      element = $compile(element)(scope);
      scope.$digest();
      
    expect(element.text()).toContain('Click me!');
    expect(element.text()).toContain('No :(');
  }));

  it('should change the text once the link is clicked', inject(function ($compile) {
      element = angular.element('<some-link been-clicked="\'No :(\'"></some-link>');
      element = $compile(element)(scope);
      scope.$digest();
      element.find('a').triggerHandler('click');
      
    expect(element.text()).toContain('Yes :)');
  }));
});
