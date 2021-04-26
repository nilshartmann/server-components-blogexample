import { useState } from "react";

export default function useSaveEntity() {
  const [isSaving, setIsSaving] = useState(false);
  const [didError, setDidError] = useState(false);
  const [error, setError] = useState(null);
  if (didError) {
    // Let the nearest error boundary handle errors while saving.
    throw error;
  }

  async function saveEntity(path, newBlogPost, requestedLocation) {
    setIsSaving(true);
    try {
      // Note: we POST our new blog as JSON (as we would do with REST),
      //  but: we RECEIVE react ui code as response
      const response = await fetch(`${path}?location=${encodeURIComponent(JSON.stringify(requestedLocation))}`, {
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

  return [isSaving, saveEntity];
}
