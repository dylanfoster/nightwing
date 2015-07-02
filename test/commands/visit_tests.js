"use strict";

import { expect } from "chai";

import fixtures from "../fixtures";
import nocks from "../helpers/nocks";

import setDriver from "../../src/commands/set_driver";
import visit from "../../src/commands/visit";

describe("visit", function () {
  let driver;

  beforeEach(function () {
    nocks.session();
    driver = setDriver(fixtures.config());
  });

  afterEach(function () {
    nocks.cleanAll();
  });

  it("visits a page", function (done) {
    nocks.visit("http://localhost:3000").url("http://localhost:3000");

    visit(driver, "http://localhost:3000").then(function () {
      return driver.getCurrentUrl();
    }).then(function (url) {
      expect(url).to.eql("http://localhost:3000");
      done();
    }, function (err) {
      return done(err);
    });
  });

  it("returns an error if no server is running", function (done) {
    visit(driver, "http://localhost:3000").then(null, function (err) {
      expect(err).to.not.eql(null);
      done();
    });
  });
});
