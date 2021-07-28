// Imports path
const path = require("path");

// Imports Express Router
const router = require("express").Router();

//Route fetches and displays the index.html (homepage)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Route fetches and displays the exercise.html page (where user inputs data)
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Route displays stats page, which is the fitness tracker's "workout dashboard"
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router