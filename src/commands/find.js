"use strict";

import { By } from "selenium-webdriver";

export default function find(driver, selector) {
  return driver.findElement(By.css(selector))
    .then(null, function (err) {
      throw new Error(err);
    });
}
