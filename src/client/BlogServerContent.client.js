import { useState } from "react";
import { useServerComponent } from "./Cache.client";
import { BlogLocationContext } from "./BlogLocationContext.client";

/** Holds our Location and connects to the server
 *
 * - The BlogLocation Object contains everything the server needs, it's provided to the client-side App using a Context (BlogLocationContext),
 *   including various functions to change it's value
 * - It will be serialized and sent to the server
 * - on server side it gets deserialized and passed as props to the Server's Root Component
 * - after processing the server-side code, the server sends back new UI information and also a new BlogLocation object
 *
 * Location and Re-rendering
 * - the Location object also acts as a cache key. In `Cache.client.js` there is a global client-wide Cache,
 * that holds the server responses.
 * - If this component (`BlogServerContent`) is re-rendered, no server roundtrip is done, as long as the cache contains
 * an object matchting the current location object
 * - On the other hand: if the (Client-)App changes the `BlogLocationObject`, a new Server roundtrip is done and the app
 *   is re-rendered. That is the same behaviour as with "classic" React application, except that - as part of the
 *   rendering - a server call is made and some of the components in the tree are executed on server
 *
 * Triggering Re-Rendering in the Application
 * - After an Event inside the (Client) application, data can be sent to the server (add new Resource, change Rsource. ...
 *   as known "before" with REST Requests for example)
 * - As part of the Request, the Location is object is sent to the server
 * - The server handles the Request (for example by adding Data to a database, as for example with REST Requests)
 *   and renders a new Application:
 *   - it passes the location object to the root component (it might CHANGE the location object before, to reflect
 *     the result of the handling before)
 *   - the complete Server-app is rendered and sent back to the client
 * - The client receives the UI data (which is not HTML) and stores it in the global cache, again with the location
 *   as the Cache Key
 * - It sets the new location to the state of the Content component (using the useXyz hook)
 *   - This change of the state leads to re-rending the content component
 *   - as there is already an obejct in the Cache with the current (updated) Location as Key, the server
 *     roundtrip is NOT done here, but instead the previously fetched UI elements are used for rendering
 * */

export default function BlogServerContent() {
  const [location, setLocation] = useState({
    postId: null,
    editorOpen: false,
    orderBy: "dateDesc"
  });

  // Receive the server side rendered parts of the UI:
  //   - either it is already in the cache, it's returned without new server request
  //   - OR its not in cache, then a server request is done
  //     in this case, the upper component (App) waits for the response thanks to the Suspend component
  const response = useServerComponent(location);

  return (
    <BlogLocationContext.Provider value={[location, setLocation]}>
      {/** Here, the components from server are included.

       At top-level this is App.Server, so if that would
       be a "normal" client component, it would be rendered here like:
       <App location={location} />

       */}
      {response.readRoot()}
    </BlogLocationContext.Provider>
  );
}
