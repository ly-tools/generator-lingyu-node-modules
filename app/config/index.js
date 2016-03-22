'use strict';

const DIRECTORIES = ['src', 'test'];
const FILES = [
  '.babelrc',
  '.eslintrc',
  '.travis.yml',
  'LICENSE',
  'package.json',
  'README.md'
];

module.exports = (appname) => {
  const name = appname.split(' ').join('-');
  const common = [{
    type: 'input',
    name: 'name',
    message: 'Name',
    'default': name
  }, {
    type: 'input',
    name: 'version',
    message: 'Version',
    'default': '1.0.0'
  }, {
    type: 'input',
    name: 'author',
    message: 'Author',
    'default': 'Your name'
  }, {
    type: 'input',
    name: 'description',
    message: 'Description',
    'default': '...'
  }];
  return {
    prompt: common,
    fn: (ctx, done) => {
      return data => {
        DIRECTORIES.forEach(val => ctx.directory(val, val));
        ctx.template('gitignore', '.gitignore');
        FILES.forEach(filename => ctx.template(filename, filename, data));
        done();
      };
    }
  };
};
