"use strict";

const register = require("react-server-dom-webpack/node-register");
register();
const babelRegister = require("@babel/register");

babelRegister({
  ignore: [
    /[\\\/](build|node_modules)[\\\/]/,
    (path) => {
      if (path.match(/[\\\/](server)[\\\/]/)) {
        // only ignore files in /server but not in /src/server
        if (!path.match(/[\\\/](src)[\\\/]/)) {
          return true;
        }
      }

      console.log("path ", path, " -> do NOT ignore");
      return false;
    }
  ],
  presets: [["react-app", { runtime: "automatic" }]],
  plugins: ["@babel/transform-modules-commonjs"]
});

require("./blog-app.server");
