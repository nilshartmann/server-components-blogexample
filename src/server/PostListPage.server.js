import PageHeader from "../shared/PageHeader";
import { Suspense } from "react";
import LoadingIndicator from "../shared/LoadingIndicator";
import TagCloud from "./TagCloud.server";
import PostList from "./PostList.server";
import OpenPostEditorButton from "../client/OpenPostEditorButton.client";
import OrderByButton from "../client/OrderByButton.client";
import ButtonBar from "../shared/ButtonBar";

export default function PostListPage({ orderBy }) {
  return (
    <div className={"PostListPage"}>
      <PageHeader button={<OpenPostEditorButton />}>Blog Posts</PageHeader>
      <div className={"Page"}>
        <div className={"Main"}>
          <Suspense fallback={<LoadingIndicator />}>
            <ButtonBar>
              <OrderByButton orderBy={"dateDesc"} />
              <OrderByButton orderBy={"dateAsc"} />
            </ButtonBar>
            <PostList orderBy={orderBy} />
          </Suspense>
        </div>
        <aside className={"Sidebar"}>
          <Suspense fallback={<LoadingIndicator />}>
            <TagCloud />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
