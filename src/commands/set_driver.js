"use strict";

import WebDriver from "selenium-webdriver";

export default function (config) {
  return new WebDriver.Builder()
    .usingServer(config.selenium)
    .withCapabilities(config.capabilities)
    .build();
}
