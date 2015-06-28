"use strict";

import { expect } from "chai";

import nocks from "./helpers/nocks";

import Commands from "../src/command";

describe("Command", function () {
  let command;

  beforeEach(function () {
    command = new Commands();
  });

  describe("#setDriver", function () {
    it("sets a driver instance", function () {
      nocks.session();
      let browser = command.setDriver();
      expect(browser).to.be.an("object");
      expect(browser).to.have.property("session_");
    });
  });
});
