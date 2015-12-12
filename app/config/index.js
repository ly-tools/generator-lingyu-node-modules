'use strict';

module.exports = function(appname, type) {
  var common = [{
    type: 'input',
    name: 'name',
    message: 'Name',
    default: appname.split(' ').join('-')
  }, {
    type: 'input',
    name: 'version',
    message: 'Version',
    default: '1.0.0'
  }, {
    type: 'input',
    name: 'author',
    message: 'Author',
    default: 'Your name'
  }, {
    type: 'input',
    name: 'description',
    message: 'Description',
    default: '...'
  }];
  return {
    prompt: common,
    fn: function(ctx, done) {
      return function(data) {
        ['lib', 'test'].forEach(function(val) {
          ctx.directory(val, val);
        });
        ctx.template('gitignore', '.gitignore');
        [
          '.eslintrc',
          '.travis.yml',
          'index.js',
          'LICENSE',
          'package.json',
          'README.md'
        ].forEach(function(name) {
          ctx.template(name, name, data);
        });
        done();
      };
    }
  };
};
