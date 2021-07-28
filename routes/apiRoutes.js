const mongoose = require("mongoose");
const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((workout) => {
            res.json(workout)
        })
        .catch((err) => {
            res.json(err)
        })
});


router.get("/api/workouts", (req, res) => {
    // Workout.aggregate?
});

router.put("/api/workouts/:id", (req, res) => {
    console.log('PARAMS', req.params)


});


router.get(`/api/workouts/range`, (req, res) => {

});

module.exports = router;