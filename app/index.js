var generators = require('yeoman-generator');
var fs = require('fs');
var config = require('./config');

module.exports = generators.Base.extend({
  constructor: function(args) {
    generators.Base.apply(this, arguments);
  },
  prompting: function() {
    var files = fs.readdirSync(process.cwd());
    if (files.length) {
      console.log('此文件夹不为空，无法初始化。');
      return;
    }
    var done = this.async();
    var option = config(this.appname, this.generatorType);
    this.prompt(option.prompt, option.fn(this, done));
  }
});
