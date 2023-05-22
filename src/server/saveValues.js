const { stringify } = require("querystring");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");
const { tramesPath } = require("./paths");

//////////
const SaveValues = (docName, values) => {
  // search for file

  fs.readdir(tramesPath, (error, files) => {
    if (error) console.log(error);
    files.forEach((file) => {
      console.log(file);
      const filename = path.parse(file).name;
      console.log(filename);
      console.log(docName);
      console.log(filename.search(docName));
      if (filename.indexOf(docName) != -1) {
        saveToFile(file, values).then(() => console.log("done"));
      }
    });
  });
  console.log("Saving values");
};

const saveToFile = async (file, values) => {
  console.log("reading file");
  const content = fs.readFileSync(
    path.resolve(__dirname, "./files/" + file),
    "binary"
  );
  // console.log("zip", content);

  const zip = new PizZip(content);
  console.log("zip", zip);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  console.log("reading file");
  // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
  let rep = {};
  for (var el in values) {
    console.log("el", values[el]);
    rep[values[el].inFileName] =
      values[el].value != "" ? values[el].value : "NA";
  }
  console.log(rep);
  doc.render(rep);

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
  });

  // buf is a nodejs Buffer, you can either write it to a
  // file or res.send it with express for example.
  fs.writeFileSync(path.resolve(__dirname, "./files/output/output.doc"), buf);

  console.log("Writing output");
};
module.exports = SaveValues;
