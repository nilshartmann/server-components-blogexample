import { asPlainBlogObject, db } from "./db.server";
import PageHeader from "../shared/PageHeader";
import Post from "../shared/Post";

export default function PostPage({ postId }) {
  // 😱   😱   😱   😱   😱   😱
  //      Database Access in our Component :-/
  // 😱   😱   😱   😱   😱   😱
  //
  const row = db.query("select * from posts where id = $1", [postId]).rows[0];
  const post = asPlainBlogObject(row);
  return (
    <>
      <PageHeader renderHomeButton>Blog Post</PageHeader>
      <Post post={post} />
    </>
  );
}
