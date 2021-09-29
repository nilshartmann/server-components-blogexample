import { useState } from "react";
import { useBlogNavigation } from "./useNavigation.client";
import Message from "../shared/Message";
import { createFromReadableStream } from "react-server-dom-webpack";
import { useUpdateServerComponentCache } from "./Cache.client";
import PageHeader from "../shared/PageHeader";
import useSaveEntity from "./useSaveEntity.client";
import Post from "../shared/Post";

// EXAMPLE: if using 'shared/PageHeader' component, code splitting
// does not work an PostEditor is included in one of the inital bundles
// (the PostEditor component is the ony CLIENT component that includes
//  PageHeader, might be the reason...)
//function PageHeader({ children }) {
//  return (
//    <div className={"PageHeader"}>
//      <h1>{children}</h1>
//    </div>
//  );
//}

/**
 * Lets the user enter a new blog post
 *
 * After pressing the Save button the new post is sent to the server
 * using an HTTP POST request using the Browser `fetch` API. Nothing special here.
 *
 * BUT: the server not returns a Status Code or Data (as we'd expect from for example
 * a REST API), but it returns new UI Code (App.server component) with the updated
 * Component tree!
 */
export default function PostEditor() {
  const updateServerComponentCache = useUpdateServerComponentCache();
  const { openHome, homeLocation, setLocationFromServerResponse } = useBlogNavigation();
  const [isSaving, savePost] = useSaveEntity();
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
      "/blog/post",
      {
        title,
        body
      },
      homeLocation()
    );

    // The server sent back new UI
    // we put it to the cache (replacing the previous ui for the
    //  returned location object)
    //

    updateServerComponentCache(location, response);

    // Set new "global" location to our BlogLocationContext
    //   -> re-renders application, new UI gets visible
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
      {(title || body) && (
        <div className={"Container PostEditorPreview"}>
          <h2>Preview: Your new Post</h2>
          <Post post={{ title, body }} />
        </div>
      )}
    </div>
  );
}
