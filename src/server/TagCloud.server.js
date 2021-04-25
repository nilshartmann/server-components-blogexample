import { tagCloud as createTagCloud } from "tag-cloud"; // 4kb lib which is not transferred to server
import { fetch } from "react-fetch";
import { db } from "./db.server";

export default function TagCloud() {
  const tagRows = db.query(`select tags
                            from posts`).rows;
  const tags = tagRows
    .flatMap((row) => row.tags.split(","))
    .reduce((tags, tag) => {
      const count = tags[tag] || 0;
      tags[tag] = count + 1;
      return tags;
    }, {});

  const tc = createTagCloud(
    Object.entries(tags).map((entry) => ({ tagName: entry[0], count: entry[1] })),
    (err, data) => data,
    { numBuckets: 4, classPrefix: "TagCloud--tag-" }
  );

  // DEMO STEP 1: ADD SLEEP HERE
  // fetch("http://localhost:4000/sleep/3000");

  return (
    <>
      <h1>Tags</h1>
      <div
        className="TagCloud"
        dangerouslySetInnerHTML={{
          __html: tc
        }}
      />
    </>
  );
}
