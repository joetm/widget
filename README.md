
Widget
======

Exploring the best way to embed a widget in a webpage

Background
-----------

In a previous job, I created a number of visualisation widgets, that were supposed to be dropped into a webpage and render themselves.
Back then, I used RequireJS to load the widgets' dependencies.
RequireJS was not the right technology and I was never satisfied with the result.

This is the way to go.


How to run the widget
---------------------

The only file that needs to be embedded into the webpage is `dist/widget.js`.

~~~~
<script src="widget.js"></script>
~~~~

A sample page can be found in `dist/index.html`.
The widget should work out of the box in the browser.


Technologies
------------

1. preact
1. ES2015
1. webpack
1. fetch polyfill (whatwg-fetch)


Dev
---

`npm install`
`npm run watch`
open dist/index.html in browser

