"use strict";

import nock from "nock";

let BASE = "http://localhost:4444";

export function elementNotFound(selector, times) {
  let mock = nock(BASE)
    .post("/wd/hub/session/1352110219202/element", {
      using: "css selector",
      value: ".bar"
    });

  if (times) {
    mock.times(times);
  }

  mock.reply(404, {
    sessionId: "1352110219202",
    status: 7,
    class: "org.openqa.selenium.remote.Response",
    hCode: "1899219352"
  });
  return this;
}

export function elementFound(selector, times) {
  let mock = nock(BASE)
    .post("/wd/hub/session/1352110219202/element", {
      using: "css selector",
      value: ".foo"
    });

  if (times) {
    mock.times(times);
  }

  mock.reply(200, {
    sessionId: "1352110219202",
    status: 0,
    class: "org.openqa.selenium.remote.Response",
    hCode: "1899219352",
    value: { ELEMENT: "0"}
  });
  return this;
}

export function session(times) {
  let mock = nock(BASE)
    .post("/wd/hub/session");

  if (times) {
    mock.times(times);
  }

  mock.reply(201, {
    status: 0,
    sessionId: "1352110219202",
    value: {
      javascriptEnabled: true,
      browserName: "firefox",
      version: "TEST",
      platform: "TEST",
      state: null
    }
  });
  return this;
}

export function text(value, times) {
  let mock = nock(BASE)
    .get("/wd/hub/session/1352110219202/element/0/text");

  if (times) {
    mock.times(times);
  }

  mock.reply(200, {
    status: 0,
    sessionId: "1352110219202",
    value: value,
    state: "success"
  });
  return this;
}

export function value(value, times) {
  let mock = nock(BASE)
    .post("/wd/hub/session/1352110219202/element/0/value", {
      value: [value]
    });

  if (times) {
    mock.times(times);
  }

  mock.reply(200, {
    status: 0,
    sessionId: "1352110219202",
    state: "success"
  });
  return this;
}

export function cleanAll() {
  nock.cleanAll();
}

export default {
  cleanAll: cleanAll,
  elementFound: elementFound,
  elementNotFound: elementNotFound,
  session: session,
  text: text,
  value: value
};
