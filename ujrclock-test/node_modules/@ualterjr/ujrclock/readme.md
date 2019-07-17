# Ujr Clock

Just playing around with web components, using the Stenciljs tool.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Using this component

- Put a script tag similar to this `<script src='node_modules/@ualterjr/ujrclock/dist/ujrclock.js'></script>` in the head of your index.html and then use the component, like this:
```html
<html>
  <head>
	<script src='node_modules/@ualterjr/ujrclock/dist/ujrclock.js'></script>
  </head>
  <body>
    <ujr-clock format="24"></ujr-clock>
  </body>
</html>
```
