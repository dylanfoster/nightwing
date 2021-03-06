"use strict";

import Mocha from "mocha";

import fillIn from "./commands/fill_in";
import find from "./commands/find";
import setDriver from "./commands/set_driver";
import visit from "./commands/visit";

const DEFAULT_OPTIONS = {
  selenium: "",
  capabilities: {
    browserName: "phantomjs"
  }
};

class Nightwing extends Mocha {
  constructor(options = {}) {
    super(options);

    this.config = options.config || DEFAULT_OPTIONS;
    this.driver = setDriver(this.config);
    this._loadGlobals();
  }

  _loadGlobals() {
    global.browser = this.driver;

    global.visit = (page) => {
      return visit(this.driver, page);
    };

    global.fillIn = (selector, text) => {
      return fillIn(this.driver, selector, text);
    };

    global.find = (selector) => {
      return find(this.driver, selector);
    };
  }
}

export default Nightwing;
