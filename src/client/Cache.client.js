/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { unstable_getCacheForType, unstable_useCacheRefresh } from "react";
import { createFromFetch } from "react-server-dom-webpack";

/**
 * Contains all UI fragments read from the server.
 * The key is the serialized BlogLocation object
 * @returns {Map<any, any>}
 */
function createResponseCache() {
  return new Map();
}

/** Update/replace a cached UI fragment with a new UI fragment read as response
 * from a server call
 */
export function useUpdateServerComponentCache() {
  const refreshCache = unstable_useCacheRefresh();
  return function updateCache(key, seededResponse) {
    refreshCache(createResponseCache, new Map([[key, seededResponse]]));
  };
}

export function useServerComponent(location) {
  console.log("location", location);
  const key = JSON.stringify(location);
  const cache = unstable_getCacheForType(createResponseCache);
  let response = cache.get(key);
  if (response) {
    return response;
  }
  response = createFromFetch(fetch("/react?location=" + encodeURIComponent(key)));
  cache.set(key, response);
  return response;
}
