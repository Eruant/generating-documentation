# Getting started

This guide should help to to get started creating your documentation. For more information about writing your documentation see [JSDuck's][jsduck] webpage.

## Setting up your machine

If you have ruby installed on your machine, you can simply install JSDuck with the following command

    $ [sudo] gem install jsduck

If you run into issues, see the installation instructions on [JSDuck's][jsduck] webpage.

## File structure

How you organise your files is up to you for the most part. The guides will need to be written in a specific way.

Here is a good starting point for you to organise your code.

    src/
      guides.json
      guides/
        getting_started/
          README.md
          icon.png
      js/
        classes/
          Person.js

## Generating the guide

To generate the documentation, all you need to do is call the JSDuck command.

In the following example I've used the file stucture mentioned above. I've also added options to output the guides, if you are not using guides this option is not required.

    $ jsduck src/js/ --title "Creating Documentation" --guides src/guides.json --output docs

[jsduck]: https://github.com/senchalabs/jsduck
