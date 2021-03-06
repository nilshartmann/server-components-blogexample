import moment from "moment";
import OpenPostButton from "../client/OpenPostButton.client";
import { CommentEditor } from "../client/CommentEditor.client";

// Note that we're using moment here as an example for a 3rd party lib,
// that might be large (in byte size) and might be better to not have it
// on client to save bandwith and CPU
function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

function postAbstract({ body }) {
  return body.length > 150 ? body.substring(0, 150) + "..." : body;
}

export default function PostPreview({ post }) {
  return (
    <article className="Container">
      <p className="Date">{formattedDate(post.date)}</p>
      <h1>{post.title}</h1>
      <div className={"PreviewAbstract"}>
        <p>
          <em>{postAbstract(post)}</em>
        </p>
        <OpenPostButton post={post} />
      </div>
      <NewestComment post={post} />
      {/*<CommentEditor post={post} />*/}
    </article>
  );
}

function NewestComment({ post }) {
  if (!post.newestcomment) {
    return null;
  }

  return (
    <div>
      <p>
        Latest comment:
        <br />
        <em>{post.newestcomment}</em>
      </p>
    </div>
  );
}
