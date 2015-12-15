'use strict';
const generators = require('yeoman-generator');
const fs = require('fs');
const config = require('./config');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },
  prompting: function() {
    const files = fs.readdirSync(process.cwd());
    if (files.length) return console.log('Error: Current directory is not empty');
    const done = this.async();
    const option = config(this.appname, this.generatorType);
    this.prompt(option.prompt, option.fn(this, done));
  }
});
