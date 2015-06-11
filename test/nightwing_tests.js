"use strict";

var expect = require("chai").expect;

var Nightwing = require("../lib/nightwing");

describe("nightwing", function () {
  describe("first main method", function () {
    var nightwing;

    beforeEach(function () {
      nightwing = new Nightwing();
    });

    it("does something awesome", function (done) {
      expect(!nightwing).to.equal(false);
      done();
    });
  });
});
