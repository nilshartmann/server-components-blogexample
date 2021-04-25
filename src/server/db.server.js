/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Pool } from "react-pg";
import credentials from "../../credentials";

// Holds the connection to our Database.
//
// As this is server-side code, we can access all resource, that are
//  available on server-side (db, fs, io, ...)
export const db = new Pool(credentials);

/**
 * Converts a blog post database row to a simple JS object
 *
 * When sending back data to the client, React Server Components
 * requires plain objects, and the row returned from PG contains
 * a Date instance (that is not "plain")
 */
export function asPlainBlogObject(row) {
  // for some reason, object spread gives error in babel here
  return Object.assign({}, row, { date: row.date.toISOString() });
}
