"use strict";

import nock from "nock";

export function session () {
  nock("http://localhost:4444/wd/hub")
    .post("/session")
    .reply(201, {
      state: "null",
      sessionId: "1352110219202",
      value: {
        javascriptEnabled: true,
        browserName: "firefox",
        version: "TEST",
        platform: "TEST",
        state: null
      }
    });
}

let nocks = {
  session: session
};

export default nocks;
