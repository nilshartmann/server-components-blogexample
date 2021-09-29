import { tagCloud as createTagCloud } from "tag-cloud"; // 4kb lib which is not transferred to server
import { fetch } from "react-fetch";
import { db } from "./db.server";
import delay from "./delay.server.js";

export default function TagCloud() {
  const tagRows = db.query(`select tags
                            from posts`).rows;
  const tags = tagRows
    .flatMap((row) => row.tags.split(","))
    .filter((tag) => !!tag) // filter out empty tags
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

  if (delay.tagCloud) {
    fetch("http://localhost:4001/sleep/3000");
  }

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
