const express = require("express");
const cors = require("cors");
const student = require("./controller/studentController");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/student", student);

app.listen(8000, () => console.log("server berjalan di port 8000"));
