import { asPlainBlogObject, db } from "./db.server";
import PageHeader from "../shared/PageHeader";
import PostPreview from "../shared/PostPreview";
import { Suspense } from "react";
import LoadingIndicator from "../shared/LoadingIndicator";
import TagCloud from "./TagCloud.server";
import PostList from "./PostList.server";

export default function PostListPage() {
  return (
    <>
      <PageHeader withOpenEditorButton>Blog Posts</PageHeader>
      <div className={"Page"}>
        <div className={"Main"}>
          <Suspense fallback={<LoadingIndicator />}>
            <PostList />
          </Suspense>
        </div>
        <aside className={"Sidebar"}>
          <Suspense fallback={<LoadingIndicator />}>
            <TagCloud />
          </Suspense>
        </aside>
      </div>
    </>
  );
}
