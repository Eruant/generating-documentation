Ext.data.JsonP.creating_guides({"guide":"<h1>Creating guides</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/creating_guides-section-1'>Setting up the guide</a></li>\n<li><a href='#!/guide/creating_guides-section-2'>File structure</a></li>\n<li><a href='#!/guide/creating_guides-section-3'>The guide</a></li>\n</ol>\n</div>\n\n<p>As well as your JavaScript documentation, you can add guides to let developers know more about how to use your code.</p>\n\n<h2 id='creating_guides-section-1'>Setting up the guide</h2>\n\n<p>Guides require you to have a configuation file such as this:</p>\n\n<pre><code>[\n  {\n    \"title\": \"Writting documentation\",\n    \"items\": [\n      {\n        \"name\": \"getting_started\",\n        \"url\": \"guides/getting_started\",\n        \"title\": \"Getting started\",\n        \"description\": \"Getting set up with writing your documentation\"\n      },\n      {\n        \"name\": \"documenting_javascript\",\n        \"url\": \"guides/documenting_javascript\",\n        \"title\": \"Documenting JavaScript\",\n        \"description\": \"A guide to adding code hints to your JavaScript code\"\n      },\n      {\n        \"name\": \"documenting_scss\",\n        \"url\": \"guides/documenting_scss\",\n        \"title\": \"Documenting SCSS\",\n        \"description\": \"A guide to adding code hints to your SCSS files\"\n      },\n      {\n        \"name\": \"creating_guides\",\n        \"url\": \"guides/creating_guides\",\n        \"title\": \"Creating guides\",\n        \"descrption\": \"A guide on writting guides. Like inception\"\n      }\n    ]\n  }\n]\n</code></pre>\n\n<h2 id='creating_guides-section-2'>File structure</h2>\n\n<p>You should then add a <code>guides</code> folder, with it's nested guides inside it.</p>\n\n<pre><code>rootDir/\n    guides.json\n    guides/\n      getting_started/\n        README.md\n        icon.png\n      documenting_javascript/\n        README.md\n        icon.png\n        exampleResource.png\n        exampleFile.zip\n</code></pre>\n\n<p>Inside each guide you are required to have at least one file named <code>README.md</code>.</p>\n\n<p>If you would like to add an image for the guide, you can add an optional file called <code>icon.png</code>. If this is not supplied, a default image will be used.</p>\n\n<p>Another other resources can also be added into each guide.</p>\n\n<h2 id='creating_guides-section-3'>The guide</h2>\n\n<p>Each guide is written in markdown. Headings should use <code>#</code>, and start with <code>&lt;h1&gt;</code>.</p>\n\n<pre><code># Start of page\n\nSome text...\n\n## First section\n\nMore text...\n</code></pre>\n\n<p>Adding <a href=\"https://github.com/senchalabs/jsduck/wiki/Guides#wiki-links\">links</a> and <a href=\"https://github.com/senchalabs/jsduck/wiki/Guides#wiki-images\">images</a> can be done with standard markdown, but it's better to link internally with <code>@link</code> or <code>@img</code> tags.</p>\n\n<p>See the <a href=\"https://github.com/senchalabs/jsduck/wiki/Guides#wiki-formatting\">guidelines</a> for details.</p>\n","title":"Creating guides"});