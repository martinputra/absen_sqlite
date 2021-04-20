const path = require("path");
const database = require("knex")({
  client: "sqlite3",
  connection: { filename: path.resolve(__dirname, "../database.sqlite") },
});

module.exports = database;
