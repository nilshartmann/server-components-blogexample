/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { unstable_createRoot } from "react-dom";
import Root from "./Root.client";

// THIS IS WERE OUR APPLICATION STARTS
//   same as with "regular" React apps
//   only that we're using Concurrent Mode here (which is also still unstable)

// unstable createRoot enables Concurrent Mode (more a less replacement for ReactDOM.render)
// https://reactjs.org/docs/concurrent-mode-adoption.html#enabling-concurrent-mode
const root = unstable_createRoot(document.getElementById("root"));

root.render(<Root />);
