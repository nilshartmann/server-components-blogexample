import { useBlogNavigation } from "./useNavigation.client";
import { useTransition, useState } from "react";
import LoadingIndicator from "../shared/LoadingIndicator";

export default function OpenPostButton({ post, label = "Read this Post" }) {
  const { openPost } = useBlogNavigation();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        className={"PendingButton"}
        disabled={isPending}
        onClick={() => {
          startTransition(() => openPost(post.id));
        }}
      >
        {isPending && <LoadingIndicator secondary />}
        {isPending || label}
      </button>
    </>
  );
}
