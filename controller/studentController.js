const {
  addStudent,
  showStudent,
  deleteStudent,
  editStudent,
} = require("../model/studentModel");

const express = require("express");
const student = express.Router();

student.post("/", (req, res) => {
  addStudent(req.body)
    .then((hasil) => {
      if (hasil.length > 0) {
        res.status(201).json({
          pesan: "berhasil menambahkan data",
          hasil: hasil,
        });
      } else {
        res.status(401).json({
          pesan: "tabel tidak ditemukan",
          hasil: hasil,
        });
      }
    })
    .catch((kesalahan) => {
      res.status(500).json({
        error: kesalahan,
      });
    });
});

student.get("/", (req, res) => {
  showStudent()
    .then((hasil) => {
      res.status(200).json(hasil);
    })
    .catch((kesalahan) => {
      res.status(500).json({
        pesan: "error, data tidak bisa ditampilkan",
        error: kesalahan,
      });
    });
});

student.delete("/", (req, res) => {
  let selected_id = req.body;

  deleteStudent(selected_id)
    .then((hasil) => {
      if (hasil > 0) {
        res.status(200).json({
          pesan: "berhasil menghapus data",
        });
      } else {
        res.status(404).json({
          pesan: "Data yang akan dihapus tidak ditemukan",
        });
      }
    })
    .catch((kesalahan) => {
      res.status(401).json({
        pesan: "gagal menghapus data",
      });
    });
});

student.patch("/edit/:id", (req, res) => {
  let selected_id = req.params.id;
  let inputData = req.body;

  editStudent(selected_id, inputData)
    .then((hasil) => {
      if (hasil > 0) {
        res.status(200).json({
          hasil: hasil,
          pesan: "data berhasil diubah",
        });
      } else {
        res.status(404).json({
          hasil: hasil,
          pesan: "data yang akan diunah tidak ditemukan",
        });
      }
    })
    .catch((kesalahan) => {
      console.log(kesalahan);
    });
});

module.exports = student;
