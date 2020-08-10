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

var note = [];

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
  return res.json(note);
});

// Create new notes - takes in JSON input and write to json file
app.post("/api/notes", function (req, res) {
  var newNote = req.body;
  note.push(newNote);
  res.json(newNote);
  var json = JSON.stringify(note);
  fs.writeFileSync("db.json", json, "utf8");
});

// Displays not details, or returns false
app.get("/api/notes/:note", function (req, res) {
  var chosen = $(noteTitle);

  for (var i = 0; i < note.length; i++) {
    if (chosen === note[i].title) {
      return res.json(note[i]);
    }
  }

  return res.json(false);
});
