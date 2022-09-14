//import { Suspense } from "react";
import { asPlainBlogObject, db } from "./db.server";
import PageHeader from "../shared/PageHeader";
import Post from "../shared/Post";
import HomeButton from "../client/HomeButton.client";
import PostComments from "./PostComments.server";
import { fetch } from "react-fetch";
import delay from "./delay.server.js";
import LoadingIndicator from "../shared/LoadingIndicator";

//function Suspense({ children }) {
//  return children;
//}

export default function PostPage({ postId }) {
  return (
    <>
      <PageHeader button={<HomeButton />}>Blog Post</PageHeader>
      <Suspense fallback={<LoadingIndicator>Loading Post...</LoadingIndicator>}>
        <PostWithComments postId={postId} />
      </Suspense>
    </>
  );
}

function PostWithComments({ postId }) {
  // 😱   😱   😱   😱   😱   😱
  //      Database Access in our Component :-/
  // 😱   😱   😱   😱   😱   😱
  //
  const row = db.query("select * from posts where id = $1", [postId]).rows[0];
  const post = asPlainBlogObject(row);

  // simulate slow requests
  if (delay.postPage) {
    fetch("http://localhost:4001/sleep/2000");
  }
  return (
    <>
      <Post post={post} />
      <Suspense fallback={<LoadingIndicator>Loading Comments</LoadingIndicator>}>
        <PostComments post={post} />
      </Suspense>
    </>
  );
}
