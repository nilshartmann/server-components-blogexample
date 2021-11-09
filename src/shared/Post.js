import moment from "moment"; // 290 K (gzipped: 72K)
import marked from "marked"; // 36 K (gzipped: 11 K)

// As long as this shared component is only used on server-side the
//  external libs (moment and marked) are not deliverd to the client => saving bandwith
//
// React only sends code for this component to the client only,
//  when the client on runtime requests it (=> inside PostEditor)

export default function Post({ post }) {
  const date = moment(post.date).format("DD.MM.YYYY");
  const body = marked.parse(post.body);

  return (
    <article className="Container">
      {post.date && <p className="Date">{date}</p>}
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  );
}
