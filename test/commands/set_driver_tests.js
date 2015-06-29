"use strict";

import { expect } from "chai";

import fixtures from "../fixtures";
import nocks from "../helpers/nocks";

import setDriver from "../../src/commands/set_driver";

describe("setDriver", function () {
  it("returns a webdriver instance", function () {
    nocks.session();
    let driver = setDriver(fixtures.config());
    expect(driver).to.be.an("object");
  });
});
