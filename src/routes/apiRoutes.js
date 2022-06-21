const fs = require("fs");
const path = require("path");
var notesData = require("../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    console.log(notesData);
    res.json(
      notesData.map(function (note, index) {
        return { ...note, id: index };
      })
    );
  });

  app.post("/api/notes", function (req, res) {
    notesData.push(req.body);
    fs.writeFile(
      path.resolve(__dirname, "../db/db.json"),
      JSON.stringify(notesData),
      function (error) {
        if (error) console.error(error);
        res.json(notesData);
      }
    );
  })
  app.delete("/api/notes/:id", function (req, res) {
    notesData.splice(req.params.id, 1);
    fs.writeFile(
      path.resolve(__dirname, "../db/db.json"),
      JSON.stringify(notesData),
      function (error) {
        if (error) console.error(error);
        res.json(notesData);
      }
    );
  });

};