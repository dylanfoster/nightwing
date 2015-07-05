"use strict";

export var config = {
  capabilities: {
    browserName: "chrome"
  },
  selenium: "http://localhost:4444/wd/hub"
};

export default {
  config: function () { return config; }
}
