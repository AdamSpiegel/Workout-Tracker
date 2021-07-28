const router = require("express").Router();
const Workout = require("../models/workouts.js");
// Do I need to require anything additional for API Routes?
// How do you include aggregate functionality in routes?

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