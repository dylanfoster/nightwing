# nightwing [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

An intuitive interaction library based on [webdriverjs](https://www.npmjs.com/package/selenium-webdriver)

## Install

```sh
$ npm install --save nightwing
```

## Usage

nightwing works by injecting several intuitive commands globally into your tests.
By default, [mochajs](http://mochajs.org) is used as the test runner, but this can be
configured using the `--runner` flag or programmatically by passing in `{ runner: foo }`
to the `Nightwing` constructor. **Note** currently, only Mocha is supported, but
we plan to continue building out support for more runners in the future

myFirstTest.js

```javascript
describe("foo", function () {
  before(function () {
    return browser.get("http://www.apple.com");
  });

  it("bar", function () {
    fillIn("input[name=q]", "foobar")
    click(".submit");

    expect(title()).to.eql("foobar - Google Search");
  });
});
```

## Programmatic Interface

runner.js

```javascript
var Nightwing = require("nightwing");
var nightwing = new Nightwing(options);

nightwing.addFile("/path/to/file.js")
nightwing.run(function (results) {

});
```

**options**

Since nightwing injects itself into to the test runner, all options available to the test runner are availble to nigthwing.

 - [mochajs#options](https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically)

## Command-line

```sh
$ nightwing [options] [files|dir]
```

## Commands api

// TODO

## License

MIT © Dylan Foster

[coveralls-image]: https://coveralls.io/repos/dylanfoster/nightwing/badge.svg?branch=development
[coveralls-url]: https://coveralls.io/r/dylanfoster/nightwing?branch=development
[npm-image]: https://badge.fury.io/js/nightwing.svg
[npm-url]: https://npmjs.org/package/nightwing
[travis-image]: https://travis-ci.org/dylanfoster/nightwing.svg?branch=development
[travis-url]: https://travis-ci.org/dylanfoster/nightwing
[daviddm-image]: https://david-dm.org/dylanfoster/nightwing.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dylanfoster/nightwing
