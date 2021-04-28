import { asPlainBlogObject, db } from "./db.server";
import PageHeader from "../shared/PageHeader";
import Post from "../shared/Post";
import HomeButton from "../client/HomeButton.client";
import PostComments from "./PostComments.server";

export default function PostPage({ postId }) {
  // 😱   😱   😱   😱   😱   😱
  //      Database Access in our Component :-/
  // 😱   😱   😱   😱   😱   😱
  //
  const row = db.query("select * from posts where id = $1", [postId]).rows[0];
  const post = asPlainBlogObject(row);
  return (
    <>
      <PageHeader button={<HomeButton />}>Blog Post</PageHeader>
      <Post post={post} />
      <PostComments post={post} />
    </>
  );
}
