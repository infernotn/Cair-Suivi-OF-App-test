const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fehmiESS007",
  database: "suivi_of_app_db",
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("hello fehmi !");
});

app.post("/controle", (req, res) => {
  console.log(req.body);
  // res.json("saving");
  const saveValues = require("./saveValues");
  saveValues("DOC-044-2", req.body);
});

app.listen(8800, () => {
  console.log("hello world");
});
