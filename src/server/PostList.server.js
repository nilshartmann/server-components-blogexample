import { asPlainBlogObject, db } from "./db.server";
import PostPreview from "../shared/PostPreview";
import { fetch } from "react-fetch";

export default function PostList({ orderBy }) {
  // 😱   😱   😱   😱   😱   😱
  //      Database Access in our Component :-/
  // 😱   😱   😱   😱   😱   😱
  //
  const blogPostRows = db.query(`select *
                                 from posts
                                 order by date ${orderBy === "dateDesc" ? "desc" : "asc"}`).rows;
  const blogPosts = blogPostRows.map(asPlainBlogObject);

  //     Change Suspense Component in PostListPage
  // fetch("http://localhost:4000/sleep/2000");

  return (
    <div>
      <div className={"PostList"}>
        {blogPosts.map((p) => (
          <PostPreview key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
