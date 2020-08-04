// Dependencies & files
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App & Path
// =============================================================
var app = express();
var PORT = 3000;

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "index.html");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
