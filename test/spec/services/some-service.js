'use strict';

describe('Service: someService', function () {
  beforeEach(module('angularjsTestsApp'));

  var someService,
      $httpBackend;

  beforeEach(inject(function($injector, _someService_) {
    $httpBackend = $injector.get('$httpBackend');
    someService = _someService_;
  }));

  afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a get method', function () {
      expect(typeof someService.get == "function").toBe(true);
  });

  it('should make a GET call to /some-url', function () {
      $httpBackend.expectGET('/some-url?bar=bar&foo=foo');
      $httpBackend.whenGET('/some-url?bar=bar&foo=foo').respond(200, 'Response content');
      
    someService.get('foo', 'bar');

      $httpBackend.flush();
  });
});
