import { db } from "./db.server";

export default function PostComments({ post }) {
  const comments = db.query("select id, comment from comments where post_id = $1 order by id desc ", [post.id]).rows;

  return (
    <div className={"Container"}>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.comment}</p>
      ))}
    </div>
  );
}
