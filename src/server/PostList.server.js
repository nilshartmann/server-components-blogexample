import { asPlainBlogObject, db } from "./db.server";
import PostPreview from "../shared/PostPreview";
import { fetch } from "react-fetch";

export default function PostList({ orderBy }) {
  // 😱   😱   😱   😱   😱   😱
  //      Database Access in our Component :-/
  // 😱   😱   😱   😱   😱   😱
  //
  const blogPostRows = db.query(`SELECT * FROM posts p 
    LEFT JOIN LATERAL (SELECT c.comment as newestcomment from comments AS c WHERE c.post_id = p.id ORDER BY c.id DESC LIMIT 1) x ON true 
    ORDER BY p.date ${orderBy === "dateDesc" ? "desc" : "asc"}`).rows;
  const blogPosts = blogPostRows.map(asPlainBlogObject);

  //     Change Suspense Component in PostListPage
  // fetch("http://localhost:4000/sleep/2000");

  return (
    <div>
      <div className={"PostList"}>
        {blogPosts.map((p) => (
          <div key={p.id}>
            <PostPreview post={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
