import { useState } from "react";
import useSaveEntity from "./useSaveEntity.client";
import { useBlogNavigation, useCurrentLocation } from "./useNavigation.client";
import { useUpdateServerComponentCache } from "./Cache.client";

export function CommentEditor({ post }) {
  const [comment, setComment] = useState("");
  const { setLocationFromServerResponse, currentLocation } = useBlogNavigation();
  const updateCache = useUpdateServerComponentCache();
  const [isSaving, save] = useSaveEntity();

  async function handleSave() {
    const { response, location } = await save(
      "/blog/comment",
      {
        comment,
        postId: post.id
      },

      // "Props" for server
      currentLocation
    );

    updateCache(location, response);
    setLocationFromServerResponse(response);
  }

  return (
    <div>
      <label>
        Add your comment
        <input value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <button disabled={isSaving || !comment} onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
