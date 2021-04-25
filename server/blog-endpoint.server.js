const { handleErrors, sendResponse } = require("./utils.server");
const { Pool } = require("pg");

// Don't keep credentials in the source tree in a real app!
const pool = new Pool(require("../credentials"));

function createBlogEndpoints(app) {
  app.post(
    "/blog/post",
    handleErrors(async function(req, res) {
      const now = new Date();
      const result = await pool.query(
        "insert into posts (title, body, date, user_id, tags) values ($1, $2, $3, $4, '') returning id",
        [req.body.title, req.body.body, now, "U1"]
      );
      const insertedId = result.rows[0].id;
      sendResponse(req, res, insertedId);
    })
  );
  //
  //  app.put(
  //    "/notes/:id",
  //    handleErrors(async function(req, res) {
  //      const now = new Date();
  //      const updatedId = Number(req.params.id);
  //      await pool.query("update notes set title = $1, body = $2, updated_at = $3 where id = $4", [
  //        req.body.title,
  //        req.body.body,
  //        now,
  //        updatedId
  //      ]);
  //      await writeFile(path.resolve(NOTES_PATH, `${updatedId}.md`), req.body.body, "utf8");
  //      sendResponse(req, res, null);
  //    })
  //  );
  //
  //  app.delete(
  //    "/notes/:id",
  //    handleErrors(async function(req, res) {
  //      await pool.query("delete from notes where id = $1", [req.params.id]);
  //      await unlink(path.resolve(NOTES_PATH, `${req.params.id}.md`));
  //      sendResponse(req, res, null);
  //    })
  //  );
  //
  //  app.get(
  //    "/notes",
  //    handleErrors(async function(_req, res) {
  //      const { rows } = await pool.query("select * from notes order by id desc");
  //      res.json(rows);
  //    })
  //  );
  //
  //  app.get(
  //    "/notes/:id",
  //    handleErrors(async function(req, res) {
  //      const { rows } = await pool.query("select * from notes where id = $1", [req.params.id]);
  //      res.json(rows[0]);
  //    })
  //  );
}

module.exports = { createBlogEndpoints };
