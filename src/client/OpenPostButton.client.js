import { useBlogNavigation } from "./useNavigation.client";
import { unstable_useTransition } from "react";

export default function OpenPostButton({ post, label = "Read this Blog Post" }) {
  const { openPost } = useBlogNavigation();
  const [startTransition, isPending] = unstable_useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(() => openPost(post.id));
      }}
    >
      {label}
    </button>
  );
}
