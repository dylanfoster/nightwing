"use strict";

import extend from "extend";
import WebDriver from "selenium-webdriver";

const DEFAULTS = {
  selenium: "http://localhost:4444/wd/hub",
  capabilities: {
    browserName: "firefox",
    acceptSslCerts: true,
    unexpectedAlertBehaviour: "accept"
  }
};

class Commands {
  constructor(config = {}) {
    config = extend(true, DEFAULTS, config);
    this.config = config;
  }

  setDriver() {
    let driver = this.driver = new WebDriver
      .Builder()
      .usingServer(this.config.selenium)
      .withCapabilities(this.config.capabilities)
      .build();
    return driver;
  }
}

export default Commands;
