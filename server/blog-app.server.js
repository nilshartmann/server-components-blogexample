/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const express = require("express");
const compress = require("compression");
const { readFileSync } = require("fs");

const path = require("path");

const { handleErrors, waitForWebpack, sendResponse } = require("./utils.server");
const { createBlogEndpoints } = require("./blog-endpoint.server");

const WEB_SERVER_PORT = 4001;

const app = express();

app.use(compress());
app.use(express.json());

app.listen(WEB_SERVER_PORT, () => {
  console.log(` 🤳 React Blog Server listening at port ${WEB_SERVER_PORT}...`);
});

// index-route: returns index.html-File as known from a static webserver
app.get(
  "/",
  handleErrors(async function(_req, res) {
    await waitForWebpack();
    const html = readFileSync(path.resolve(__dirname, "../build/index.html"), "utf8");
    // Note: this is sending an empty HTML shell, like a client-side-only app.
    // However, the intended solution (which isn't built out yet) is to read
    // from the Server endpoint and turn its response into an HTML stream.
    res.send(html);
  })
);

// returns the root Server Component of our App
app.get("/react", function(req, res) {
  sendResponse(req, res, null);
  //  setTimeout(() => sendResponse(req, res, null), 2000);
});

// contains the "data" endpoints
//  request to store/update data (as known from HTTP APIs),
//  but RETURN react components/ui
createBlogEndpoints(app);

//
// dummy endpoint to simulate slow responses
app.get("/sleep/:ms", function(req, res) {
  setTimeout(() => {
    res.json({ ok: true });
  }, req.params.ms);
});

// --------------------- ADD STATIC ASSETS ---------------------------
app.use(express.static("build"));
app.use(express.static("public"));

app.on("error", function(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});
