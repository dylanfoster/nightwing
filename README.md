# nightwing [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Human based interaction library for webdriver js


## Install

```sh
$ npm install --save nightwing
```


## Usage

```js
describe("foo", function () {
  beforeEach(function () {
    return browser.get("http://google.com");
  });

  it("bar", function () {
    fillIn(".username");
    fillIn(".password");
    click(".login");

    expect(title()).to.eql("foo");
  });
});
```

## License

MIT © Dylan Foster


[npm-image]: https://badge.fury.io/js/nightwing.svg
[npm-url]: https://npmjs.org/package/nightwing
[travis-image]: https://travis-ci.org/dylanfoster/nightwing.svg?branch=development
[travis-url]: https://travis-ci.org/dylanfoster/nightwing
[daviddm-image]: https://david-dm.org/dylanfoster/nightwing.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dylanfoster/nightwing
