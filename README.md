# broccoli-template-compiler

A generic filter for Broccoli that turns template files into compiled JS functions

## Installation

```bash
npm install --save-dev broccoli-template-compiler
```

## Usage Example

```js
var templateCompiler = require('broccoli-template-compiler');
tree = templateCompiler(tree, {
  extensions: ['hbs', 'handlebars']
});
```
