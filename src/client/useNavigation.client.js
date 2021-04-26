import { useContext } from "react";
import { BlogLocationContext } from "./BlogLocationContext.client";

export function useCurrentLocation() {
  const [location] = useContext(BlogLocationContext);
  return location;
}

/**
 * A client-side hook that provides functions to update the global location object
 * (from BlogLocationContext)
 *
 * While it's mainly a wrapper around the `setLocation` function from the context,
 * it provides more meaningful function (names)
 */
export function useBlogNavigation() {
  const [location, setLocation] = useContext(BlogLocationContext);

  function homeLocation() {
    return { ...location, postId: null, editorOpen: false };
  }

  function openHome(orderBy) {
    const newLocation = homeLocation();
    if (typeof orderBy === "string") {
      newLocation.orderBy = orderBy;
    }
    return setLocation(newLocation);
  }

  function openPost(postId) {
    return setLocation({ ...location, postId, editorOpen: false });
  }

  function openEditor() {
    return setLocation({ ...location, editorOpen: true });
  }

  function setLocationFromServerResponse(locationString) {
    const nextLocation = JSON.parse(locationString);
    setLocation(nextLocation);
  }

  return {
    currentLocation: location,
    setLocationFromServerResponse,
    openHome,
    openPost,
    openEditor,
    homeLocation
  };
}
