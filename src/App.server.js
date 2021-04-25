/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Suspense } from "react";

import PostListPage from "./server/PostListPage.server";
import PostPage from "./server/PostPage.server";
import PostEditor from "./client/PostEditor.client";

/**
 * This is the entry point for components that are executed
 * on server side.
 *
 * - The server receives properties via URL parameter
 * - Depending on the URL that is invoked on the server, this App
 *   component is returned with unchanged properties
 * - OR business logic is executed (store a new Blog Post) and then
 *   this component is executed
 * - the Server specifies it's properties (as you would do, if you render
 *   a component on client-site).
 * - the Server is free to determine the properties itself, it might use
 *   information it received from the client request or it computes its own
 *   properties and passes them to App
 *
 */
export default function App({ postId, editorOpen }) {
  if (editorOpen) {
    return <PostEditor />;
  }

  return (
    <div className={"App"}>
      {postId === null ? (
        <Suspense fallback={"Post List Loading..."}>
          <PostListPage />
        </Suspense>
      ) : (
        <Suspense fallback={"Blog Post Loading ..."}>
          <PostPage postId={postId} />
        </Suspense>
      )}
    </div>
  );
}
