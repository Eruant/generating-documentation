describe('Looking at a person', function () {

  var should = require('should'),
    Person = require('../src/js/classes/Person');

  describe('new Person', function () {
    it('should exist', function () {
      var bob = new Person('bob');
      should.exist(bob);
    });

    it('should error if no name is set', function () {
      var bob = new Person();
      should.equal(undefined);
    });

    it('should have the name supplied', function () {
      var bob = new Person('bob');
      (bob.name).should.be.a.String.and.be.exactly('bob');
    });

    it('should return a greeting', function () {
      var bob = new Person('bob');
      (bob.sayHello()).should.be.a.String.and.be.exactly("Hi I'm bob!");
    });

    it('should rename the person', function () {
      var person = new Person('bob');
      (person.name).should.equal('bob');
      person.renamePerson('jeff');
      (person.name).should.equal('jeff');
    });
  });
});
