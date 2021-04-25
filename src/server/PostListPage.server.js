import { asPlainBlogObject, db } from "./db.server";
import PageHeader from "../shared/PageHeader";
import PostPreview from "../shared/PostPreview";

export default function PostListPage() {
  // 😱   😱   😱   😱   😱   😱
  //      Database Access in our Component :-/
  // 😱   😱   😱   😱   😱   😱
  //
  const blogPostRows = db.query(`select * from posts order by id desc`).rows;
  const blogPosts = blogPostRows.map(asPlainBlogObject);
  return (
    <>
      <PageHeader withOpenEditorButton>Blog Posts</PageHeader>
      {blogPosts.map((p) => (
        <PostPreview key={p.id} post={p} />
      ))}
    </>
  );
}
