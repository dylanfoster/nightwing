"use strict";

import { expect } from "chai";

import fixtures from "../fixtures";
import nocks from "../helpers/nocks";

import find from "../../src/commands/find";
import setDriver from "../../src/commands/set_driver";
import fillIn from "../../src/commands/fill_in";

describe("fillIn", function () {
  let driver;

  beforeEach(function () {
    nocks.session();
    driver = setDriver(fixtures.config());
  });

  afterEach(function () {
    nocks.cleanAll();
  });

  it("fills in an input", function (done) {
    nocks.elementFound(".foo", 3).value("foo", 2).text("foo");

    expect(fillIn(driver, ".foo", "foo")).to.be.an("object");

    fillIn(driver, ".foo", "foo");
    find(driver, ".foo").then(function (el) {
      return el.getText();
    }).then(function (text) {
      expect(text).to.eql("foo");
      done();
    });
  });

  it("returns an error if no element is found", function (done) {
    nocks.elementNotFound(".foo").value("foo").text("foo");

    fillIn(driver, ".bar").then(null, function (err) {
      expect(err.message).to.eql("NoSuchElementError: undefined");
      done();
    });
  });
});
