import { useState } from "react";
import PageHeader from "../shared/PageHeader";
import { useBlogNavigation } from "./useNavigation.client";
import Message from "../shared/Message";
import { createFromReadableStream } from "react-server-dom-webpack";
import { useUpdateServerComponentCache } from "./Cache.client";

export default function PostEditor() {
  const updateServerComponentCache = useUpdateServerComponentCache();
  const { openHome, homeLocation, setLocationFromServerResponse } = useBlogNavigation();
  const [isSaving, savePost] = useSavePost();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const clearDisabled = (!title && !body) || isSaving;
  const saveButtonDisabled = !title || !body || isSaving;

  function clear() {
    setTitle("");
    setBody("");
  }

  async function handleSave() {
    const { response, location } = await savePost(
      {
        title,
        body
      },
      homeLocation()
    );

    const seededResponse = createFromReadableStream(response);
    updateServerComponentCache(location, seededResponse);
    setLocationFromServerResponse(location);
  }

  return (
    <div>
      <PageHeader>Add Post</PageHeader>
      <div className={"Container"}>
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
        </label>
        {title ? (
          <Message type="info" msg="Title correctly filled" />
        ) : (
          <Message type="error" msg="Please enter a title" />
        )}

        <label>
          Body
          <textarea value={body} onChange={(e) => setBody(e.currentTarget.value)} />
        </label>
        {body ? <Message type="info" msg="Body correctly filled" /> : <Message msg="Please enter a body" />}

        <button disabled={clearDisabled} onClick={clear}>
          Clear
        </button>
        <button onClick={openHome}>Cancel</button>
        <button disabled={saveButtonDisabled} onClick={handleSave}>
          Save Post
        </button>
      </div>
    </div>
  );
}

function useSavePost() {
  const [isSaving, setIsSaving] = useState(false);
  const [didError, setDidError] = useState(false);
  const [error, setError] = useState(null);
  if (didError) {
    // Let the nearest error boundary handle errors while saving.
    throw error;
  }

  async function savePost(newBlogPost, requestedLocation) {
    setIsSaving(true);
    try {
      // Note: we POST our new blog as JSON (as we would do with REST),
      //  but: we RECEIVE react ui code as response
      const response = await fetch(`/blog/post?location=${encodeURIComponent(JSON.stringify(requestedLocation))}`, {
        method: "POST",
        body: JSON.stringify(newBlogPost),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      return { response: response.body, location: response.headers.get("X-Location") };
    } catch (e) {
      setDidError(true);
      setError(e);
    } finally {
      setIsSaving(false);
    }
  }

  return [isSaving, savePost];
}
