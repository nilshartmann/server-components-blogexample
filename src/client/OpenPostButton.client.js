import { useBlogNavigation } from "./useNavigation.client";

export default function OpenPostButton({ post, label = "Read this Blog Post" }) {
  const { openPost } = useBlogNavigation();

  return <button onClick={() => openPost(post.id)}>{label}</button>;
}
