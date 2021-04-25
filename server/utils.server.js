const { readFileSync } = require("fs");
const { pipeToNodeWritable } = require("react-server-dom-webpack/writer");
const path = require("path");

const React = require("react");
const ReactApp = require("../src/App.server").default;
function handleErrors(fn) {
  return async function(req, res, next) {
    try {
      return await fn(req, res);
    } catch (x) {
      next(x);
    }
  };
}

async function renderReactTree(res, props) {
  await waitForWebpack();
  const manifest = readFileSync(path.resolve(__dirname, "../build/react-client-manifest.json"), "utf8");
  const moduleMap = JSON.parse(manifest);
  pipeToNodeWritable(React.createElement(ReactApp, props), res, moduleMap);
}

function sendResponse(req, res, redirectToId) {
  const location = JSON.parse(req.query.location);
  if (redirectToId) {
    location.selectedId = redirectToId;
  }
  res.set("X-Location", JSON.stringify(location));
  renderReactTree(res, {
    postId: location.postId,
    editorOpen: location.editorOpen
  });
}

async function waitForWebpack() {
  const indexFile = path.resolve(__dirname, "../build/index.html");
  while (true) {
    try {
      readFileSync(indexFile);
      return;
    } catch (err) {
      console.log(`Could not find webpack build output in '${indexFile}'. Will retry in a second...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

module.exports = {
  handleErrors,
  sendResponse,
  waitForWebpack
};
