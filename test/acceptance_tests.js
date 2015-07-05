/* global browser, fillIn, find, visit: true */
"use strict";

import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

import Nightwing from "../src/nightwing";

describe("Nightwing - Acceptance", function () {
  this.timeout(60000);

  before(function () {
    new Nightwing();
    return visit("http://www.google.com");
  });

  after(function () {
    return browser.quit();
  });

  describe("visit", function () {
    it("visits a page", function () {
      return expect(browser.getTitle()).to.eventually.eql("Google");
    });
  });

  describe("find", function () {
    it("finds an element", function () {
      return find("input[name=q]").then(function (el) {
        return expect(el.getAttribute("autocomplete")).to.eventually.eql("off");
      });
    });
  });

  describe("fillIn", function () {
    it("fills in an input", function () {
      return fillIn("input[name=q]", "foo").then(function () {
        return find("input[name=btnG]");
      }).then(function (el) {
        return el.click();
      }).then(function () {
        return expect(browser.getTitle()).to.eventually.eql("foo - Google Search");
      });
    });
  });
});
