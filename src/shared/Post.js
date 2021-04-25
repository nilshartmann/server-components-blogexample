import moment from "moment"; // ~ 23kb

// As long as this shared component is only used on server-side the
//  moment is not deliverd to the client => saving bandwith
//
// React only sends code for this component to the client only,
//  when the client on runtime requests it
//  (which is never the case in our example)
function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

export default function Post({ post }) {
  return (
    <article className="Container">
      <p className="Date">{formattedDate(post.date)}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
