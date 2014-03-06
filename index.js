var jsStringEscape = require('js-string-escape')
var Filter = require('broccoli-filter')
var compiler = require('ember-template-compiler')

module.exports = TemplateFilter
TemplateFilter.prototype = Object.create(Filter.prototype)
TemplateFilter.prototype.constructor = TemplateFilter
function TemplateFilter (inputTree, options) {
  if (!(this instanceof TemplateFilter)) return new TemplateFilter(inputTree, options)
  this.inputTree = inputTree
  this.extensions = options.extensions
  this.compileFunction = options.compileFunction || ''
}

TemplateFilter.prototype.targetExtension = 'js'

TemplateFilter.prototype.processString = function (string) {
  var incoming = jsStringEscape(string);
  var input = compiler.precompile(incoming);
  return "Ember.TEMPLATES['application'] = Ember.Handlebars.template(" + input + ");\n";
}
