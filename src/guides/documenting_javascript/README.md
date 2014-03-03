# Documenting your JavaScript

To generate the API documentation you need to add code hints to your JavaScript files. The aim of this guide is to show you the most common and useful options.

All of the options you set should be added within comments, so that it does not affect your JavaScript

## Syntax

### Class

The main option you will use is `@class`. You can use it to document the name of the class.

    /**
     * @class Person
     * A human being in code form
     */

If you are extending another class you could also use `@extend <original classname>`.

### Author

The Author tag documents who wrote the code.

    /**
     * @author Matt Gale <matt@littleball.co.uk>
     */

### Method

The method tag documents the name, parameters, and return values of the method.

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

### Ignore

If there are parts of your class that you do not want to be documented, you can add the ignore tag

    /**
     * @ignore
     */
    Person.prototype.hiddenFunction = function () {
      this.doSomethingHidden();
    };

### Private

To make a function as private you can add the `@private` tag.

    /**
     * Provite utility to return a private string
     * @private
     */
    var privateFunction = function () {
      return 'This is private';
    };

    module.exports = {
      publicFunction: function () {
        return 'This is public ->' + privateFunction();
      }
    };
