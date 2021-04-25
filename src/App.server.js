/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Suspense } from "react";

import Note from "./server/Note.server";
import NoteList from "./server/NoteList.server";
import EditButton from "./client/EditButton.client";
import SearchField from "./client/SearchField.client";
import NoteSkeleton from "./shared/NoteSkeleton";
import NoteListSkeleton from "./shared/NoteListSkeleton";
import PostListPage from "./server/PostListPage.server";
import PostPage from "./server/PostPage.server";
import PostEditorClient from "./client/PostEditor";

export default function App({ postId, editorOpen }) {
  if (editorOpen) {
    return <PostEditorClient />;
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
