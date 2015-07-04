"use strict";

import { expect } from "chai";

import fixtures from "../fixtures";
import nocks from "../helpers/nocks";

import setDriver from "../../src/commands/set_driver";
import find from "../../src/commands/find";

describe("find", function () {
  let driver;

  beforeEach(function () {
    nocks.session();
    driver = setDriver(fixtures.config());
  });

  afterEach(function () {
    nocks.cleanAll();
  });

  it("finds an element", function (done) {
    nocks.elementFound(".foo", 2);

    expect(find(driver, ".foo")).to.be.an("object");

    find(driver, ".foo").then(function (el) {
      expect(el.id_.value_).to.eql({ ELEMENT: "0" });
      done();
    });
  });

  it("returns an error if no element is found", function (done) {
    nocks.elementNotFound(".foo");

    find(driver, ".bar").then(null, function (err) {
      expect(err.message).to.eql("NoSuchElementError: undefined");
      done();
    });
  });
});
