var jsStringEscape = require('js-string-escape')
var Filter = require('broccoli-filter')
var compiler = require('ember-template-compiler')

module.exports = TemplateCompiler
TemplateCompiler.prototype = Object.create(Filter.prototype)
TemplateCompiler.prototype.constructor = TemplateCompiler
function TemplateCompiler (inputTree, options) {
  if (!(this instanceof TemplateCompiler)) return new TemplateCompiler(inputTree, options)
  this.inputTree = inputTree
  this.extensions = options.extensions
}

TemplateCompiler.prototype.targetExtension = 'js'

TemplateCompiler.prototype.processString = function (string) {
  var incoming = jsStringEscape(string);
  var input = compiler.precompile(incoming);
  return "Ember.TEMPLATES['application'] = Ember.Handlebars.template(" + input + ");\n";
}
