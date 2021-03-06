var fs = require('fs');
var path = require('path');
var assert = require('assert');
var TemplateFilter = require('../index');

describe('broccoli-template-compiler', function() {
  it('it sets inputTree', function() {
    var filter = new TemplateFilter('templates');
    assert(filter.inputTree == 'templates');
  });

  it('it sets options', function() {
    var filter = new TemplateFilter('templates', {module: true});
    assert(filter.options.module === true);
  });

  it('returns a precompiled global template', function() {
    var filter = new TemplateFilter('templates');
    var template = filter.processString('foo', './templates/foo.hbs');
    var expected = fs.readFileSync(path.resolve(__dirname, 'expected-global.js')).toString();
    assert(template === expected);
  });

  it('returns a precompiled module template', function() {
    var filter = new TemplateFilter('templates', {module: true});
    var template = filter.processString('foo', './templates/foo.hbs');
    var expected = fs.readFileSync(path.resolve(__dirname, 'expected-module.js')).toString();
    assert(template === expected);
  });
});

