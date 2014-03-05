/**
 * @class Person
 * A human being in code form.
 *
 * @author Matt Gale <matt@littleball.co.uk>
 *
 * Usage:
 *     var Person = require('./Person');
 *
 *     var bob = new Person('Bob');
 *     bob.sayHello(); // output -> "Hi I'm Bob!"
 *
 * @constructor
 * Creates a new Person instance
 * @param {String} name The name of the person
 */
var Person = function (name) {
  if (!name) {
    return;
  }
  this.name = name;
};

/**
 * @method sayHello
 * Returns a personal greeting from this person
 *
 * @return {String} Personal Greeting
 */
Person.prototype.sayHello = function () {
    return 'Hi I\'m ' + this.name + '!';
};

/**
 * @method renamePerson
 * Changes the name of this person
 *
 * @param {String} newName The new name of the person
 *
 * @return {String} A message about the change of name
 */
Person.prototype.renamePerson = function (newName) {
  var oldName = this.name;
  this.name = newName;
  return oldName + ' has changed their name to ' + this.name;
};

/**
 * @ignore
 * Exporting the module (the class has already been documented above)
 */
module.exports = Person;
