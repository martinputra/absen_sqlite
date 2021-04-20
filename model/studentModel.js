const database = require("./connection");

const addStudent = async (inputData) => {
  return await database("students")
    .insert(inputData)
    .then((hasil) => {
      return hasil;
    })
    .catch((kesalahan) => {
      return kesalahan;
    });
};

const showStudent = async () => {
  return await database("students")
    .select("*")
    .then((hasil) => {
      return hasil;
    })
    .catch((kesalahan) => {
      return kesalahan;
    });
};

const deleteStudent = async (inputData) => {
  return await database("students")
    .where(inputData)
    .del()
    .then((hasil) => {
      return hasil;
    })
    .catch((kesalahan) => {
      return kesalahan;
    });
};

const editStudent = async (id, inputData) => {
  return await database("students")
    .where({ id: id })
    .update(inputData)
    .then((hasil) => {
      return hasil;
    })
    .catch((kesalahan) => {
      return kesalahan;
    });
};

module.exports = { addStudent, showStudent, deleteStudent, editStudent };
