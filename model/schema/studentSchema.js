const database = require("../connection");

async function createTableStudents() {
  return await database.schema
    .createTable("students", (table) => {
      table.increments("id").notNullable();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("telephone").notNullable();
      table.string("batch").notNullable();
      table.timestamp("date").defaultTo(database.fn.now());
    })
    .then((hasil) => {
      console.log(hasil);
    })
    .catch((kesalahan) => {
      console.log(kesalahan);
    });
}

createTableStudents().then((data) => {
  process.exit();
});
