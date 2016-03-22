# generator-lingyu-node-modules

[![Build Status](https://travis-ci.org/LingyuCoder/generator-lingyu-node-modules.png)](https://travis-ci.org/LingyuCoder/generator-lingyu-node-modules)
[![Dependency Status](https://david-dm.org/LingyuCoder/generator-lingyu-node-modules.svg)](https://david-dm.org/LingyuCoder/generator-lingyu-node-modules)
[![NPM version](http://img.shields.io/npm/v/generator-lingyu-node-modules.svg?style=flat-square)](http://npmjs.org/package/generator-lingyu-node-modules)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/generator-lingyu-node-modules.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/generator-lingyu-node-modules.svg?style=flat-square)](https://npmjs.org/package/generator-lingyu-node-modules)

A node modules generator of Yeoman

* ES7 features with babel (async/await, import/export and so on)
* mocha + shouldjs
* istanbul
* travis

## Installation

```bash
$ npm install -g yo
$ npm install -g generator-lingyu-node-modules
```

## Usage

```bash
$ mkdir demo && cd demo
$ yo lingyu-node-modules
$ npm install
$ npm run dev # watch file change and run build automaticly
$ npm run build # build files with babel
$ npm run test # test with mocha and istanbul
```

## License

The MIT License (MIT)

Copyright (c) 2015 天镶

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
