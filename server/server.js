const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fehmiESS007",
  database: "crud_app",
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("hello fehmi !");
});
// app.get("/books", (req, res) => {
//   // const content = fs.readFileSync("./files/test.docx", "utf-8");
//   // console.log(content);

//   const q = "SELECT * FROM books";
//   db.query(q, (err, data) => {
//     if (err) {
//       return res.json(err);
//     }

//     return res.json(data);
//   });
// });
// app.post("/add", (req, res) => {
//   const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?) ";
//   const values = [req.body.title, req.body.desc, req.body.cover];
//   //   const values = [
//   //     "Harry Potter and the Goblet of Fire",
//   //     "A generation grew up on Rowling’s all-conquering magical fantasies, but countless adults have also been enthralled by her immersive world. Book four, the first of the doorstoppers, marks the point where the series really takes off. The Triwizard Tournament provides pace and tension, and Rowling makes her boy wizard look death in the eye for the first time.",
//   //     "",
//   //   ];
//   db.query(q, [values], (err, data) => {
//     if (err) {
//       return res.json(err);
//     }

//     return res.json(data);
//   });
// });

////

app.post("/controle", (req, res) => {
  console.log(req.body);
  // res.json("saving");
  const saveValues = require("./saveValues");
  saveValues("DOC-044-2", req.body);
});

app.listen(8800, () => {
  console.log("hello world");
});
