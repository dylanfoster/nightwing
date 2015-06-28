"use strict";

import WebDriver from "selenium-webdriver";

class Commands {
  constructor(config = {}) {
    this.config = config;
    this.config.selenium = config.selenium || "http://localhost:4444/wd/hub";
    this.config.capabilities = this.config.capabilities ||
    { browserName: "firefox", acceptSslCerts: true, unexpectedAlertBehaviour: "accept" };
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
