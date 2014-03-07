# broccoli-template-compiler

An opinionated filter for Broccoli that compiles handlebars templates for ember.js

## Installation

```bash
npm install --save-dev broccoli-template-compiler
```

## Usage Example

```js
module.exports = function (broccoli) {
  var templateCompiler = require('broccoli-template-compiler')
  var pickFiles = require('broccoli-static-compiler')

  function preprocess (tree) {
    tree = templateCompiler(tree);
    return tree
  }

  var sourceTree = broccoli.makeTree('js');
  var templates = pickFiles(sourceTree, {
    srcDir: '/templates',
    destDir: '/templates'
  })
  var appTemplates = preprocess(templates);
  return [appTemplates];
}
```

## What file types does it work with?

It's opinionated so you get both .hbs and .handlebars extensions out of the box

## What should I look out for?

It requires the destination directory name be templates (as shown in the above example)
