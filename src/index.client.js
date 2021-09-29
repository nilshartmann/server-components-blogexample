/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { hydrateRoot } from "react-dom";
import Root from "./Root.client";

// THIS IS WERE OUR APPLICATION STARTS
//   same as with "regular" React apps
//   https://reactjs.org/docs/react-dom.html#hydrate
hydrateRoot(document.getElementById("root"), <Root />);
