
Widget
======

Exploring the best way to embed a widget in a webpage

Background
-----------

In a previous job, I created a number of visualisation widgets, that were supposed to be dropped into a webpage and render themselves.
Back then, I used RequireJS to load the widgets' dependencies.
RequireJS was not the right technology and I was never satisfied with the result.

This is the way to go.

Technologies
------------

1. preact
1. ES2015
1. webpack
1. fetch polyfill (whatwg-fetch)

How to run the widget
---------------------

The only file that needs to be embedded into the webpage is `dist/widget.js`.

~~~~
<script src="widget.js"></script>
~~~~

A sample page can be found in `dist/index.html`.
The widget should work out of the box in the browser.




Dev
---

1. npm install
1. npm run watch
1. open dist/index.html in browser

