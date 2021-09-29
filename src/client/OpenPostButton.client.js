import { useBlogNavigation } from "./useNavigation.client";
import { useTransition } from "react";

export default function OpenPostButton({ post, label = "Read this Blog Post" }) {
  const { openPost } = useBlogNavigation();
  const [isPending, startTransition] = useTransition();

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
