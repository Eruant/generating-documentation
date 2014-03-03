# Creating guides

As well as your JavaScript documentation, you can add guides to let developers know more about how to use your code.

## Setting up the guide

Guides require you to have a configuation file such as this:

    [
      {
        "title": "Writting documentation",
        "items": [
          {
            "name": "getting_started",
            "url": "guides/getting_started",
            "title": "Getting started",
            "description": "Getting set up with writing your documentation"
          },
          {
            "name": "documenting_javascript",
            "url": "guides/documenting_javascript",
            "title": "Documenting JavaScript",
            "description": "A guide to adding code hints to your JavaScript code"
          },
          {
            "name": "documenting_scss",
            "url": "guides/documenting_scss",
            "title": "Documenting SCSS",
            "description": "A guide to adding code hints to your SCSS files"
          },
          {
            "name": "creating_guides",
            "url": "guides/creating_guides",
            "title": "Creating guides",
            "descrption": "A guide on writting guides. Like inception"
          }
        ]
      }
    ]

## File structure

You should then add a `guides` folder, with it's nested guides inside it.

    rootDir/
        guides.json
        guides/
          getting_started/
            README.md
            icon.png
          documenting_javascript/
            README.md
            icon.png
            exampleResource.png
            exampleFile.zip

Inside each guide you are required to have at least one file named `README.md`.

If you would like to add an image for the guide, you can add an optional file called `icon.png`. If this is not supplied, a default image will be used.

Another other resources can also be added into each guide.

## The guide

Each guide is written in markdown. Headings should use `#`, and start with `<h1>`.

    # Start of page

    Some text...

    ## First section

    More text...

Adding [links][links] and [images][images] can be done with standard markdown, but it's better to link internally with `@link` or `@img` tags.

See the [guidelines][guidelines] for details on formating.


[guidelines]: https://github.com/senchalabs/jsduck/wiki/Guides#wiki-formatting
[links]:      https://github.com/senchalabs/jsduck/wiki/Guides#wiki-links
[images]:     https://github.com/senchalabs/jsduck/wiki/Guides#wiki-images
