/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import BlogServerContent from "./client/BlogServerContent.client";

/**
 * Root of our Application:
 *
 * - Responsible for rendering an ErrorBoundary (in case something fails during rendering).
 * - Renders Supsense Component that displays Waiting Message while content (from Server) is loading
 */
export default function Root() {
  return (
    <Suspense fallback={<h1>Application loading...</h1>}>
      <ErrorBoundary FallbackComponent={Error}>
        <BlogServerContent />
      </ErrorBoundary>
    </Suspense>
  );
}

function Error({ error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
}
