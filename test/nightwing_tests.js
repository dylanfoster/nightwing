/* global browser, fillIn, find, visit: true */
"use strict";

import { expect } from "chai";
import Mocha from "mocha";

import nocks from "./helpers/nocks";

import Nightwing from "../src/nightwing";

describe("Nightwing", function () {
  it("extends Mocha", function () {
    expect(new Nightwing()).to.be.an.instanceof(Mocha);
  });

  it("loads methods into the global scope", function () {
    nocks.session();
    new Nightwing();

    expect(browser).to.be.an("object");
    expect(visit).to.be.a("function");
    expect(fillIn).to.be.a("function");
    expect(find).to.be.a("function");
  });

  it("loads config from defaults", function () {
    nocks.session();
    let nightwing = new Nightwing();
    expect(nightwing.config).to.eql({
      selenium: "",
      capabilities: {
        browserName: "phantomjs"
      }
    });
  });
});
