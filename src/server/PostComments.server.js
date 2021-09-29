import { db } from "./db.server";
import delay from "./delay.server";
import { fetch } from "react-fetch";

export default function PostComments({ post }) {
  const comments = db.query("select id, comment from comments where post_id = $1 order by id desc ", [post.id]).rows;
  // Simluate slow requests
  if (delay.postComments) {
    fetch("http://localhost:4001/sleep/3500");
  }
  return (
    <div className={"Container"}>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.comment}</p>
      ))}
    </div>
  );
}
