const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const upload = require("express-fileupload");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fehmiESS007",
  database: "suivi_of_app_db",
});
console.log("Fetching data...");
const fetchData = async (data) => {
  // ["CTUK1", "CTUK2", "CTUK3", "PLASTURGIE"].forEach((atelier) => {
  let q =
    "SELECT COUNT(of_id) as cnt From ordres_de_fabrication WHERE of_statut='en cours' and of_atelier=(?)";

  db.query(q, "CTUK1", (err, d) => {
    console.log(d[0].cnt);
    console.log("x", data["CTUK1"]);

    data["CTUK1"] = d[0].cnt;
  });
  setTimeout(() => {}, 10000);
};
app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({limit: "50mb",extended: true,parameterLimit: "50}));
app.use(express.json());
app.use(cors());
app.get("/", async (req, res) => {
  let data = { CTUK1: 0, CTUK2: 0, CTUK3: 0, PLASTURGIE: 0 };
  fetchData(data).then(() => {
    console.log("ddd", data);
    return res.json(data);
  });
});

app.post("/controle", (req, res) => {
  console.log(req.body);
  // res.json("saving");
  const saveValues = require("./saveValues");
  saveValues("DOC-044-2", req.body);
});

/// get file
app.use(upload());

app.listen(8800, () => {
  console.log("hello world");
});
