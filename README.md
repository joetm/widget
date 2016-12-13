
Exploring the best way to embed a widget in a webpage

In a previous job, I created a number of visualisation widgets, that were supposed to be dropped into a webpage and render themselves.
Back then, I used RequireJS to load the widgets' dependencies.
RequireJS was not the right technology and I was never satisfied with the result.

This is the way to go.

The only file that needs to be embedded into the webpage is dist/widget.js.

`
<script src="widget.js"></script>
`

