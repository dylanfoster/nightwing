"use strict";

import { By } from "selenium-webdriver";

export default function fillIn(driver, selector, text) {
  return driver.findElement(By.css(selector))
    .then(function (element) {
      return element.sendKeys(text);
    }).then(null, function (err) {
      throw new Error(err);
    });
}
