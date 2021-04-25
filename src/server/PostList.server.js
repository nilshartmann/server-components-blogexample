import { asPlainBlogObject, db } from "./db.server";
import PostPreview from "../shared/PostPreview";
import { fetch } from "react-fetch";

export default function PostList() {
  // 😱   😱   😱   😱   😱   😱
  //      Database Access in our Component :-/
  // 😱   😱   😱   😱   😱   😱
  //
  const blogPostRows = db.query(`select * from posts order by id desc`).rows;
  const blogPosts = blogPostRows.map(asPlainBlogObject);

  // Now let's see how the Suspense boundary above lets us not block on this.
  // DEMO STEP 2: sleep here
  //  fetch("http://localhost:4000/sleep/2000");

  return blogPosts.map((p) => <PostPreview key={p.id} post={p} />);
}
