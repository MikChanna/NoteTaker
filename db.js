// Dependencies & files
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App & Path
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Notes Array

var notes = [];

// Routes
// =============================================================

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// Displays all notes
app.get("/api/notes", function (req, res) {
  return res.json(notes);
});

// Displays specific note
app.get("/api/notes/:title", function (req, res) {
  fs.writeFileSync("db.json").push(newNote);
});

// Create new notes - takes in JSON input
app.post("/api/notes", function (req, res) {
  var newNote = req.body;
  var json = JSON.stringify(newNote);

  notes.push(newNote);
  res.json(newNote);
  fs.writeFileSync("db.json", json, "utf8");
});
