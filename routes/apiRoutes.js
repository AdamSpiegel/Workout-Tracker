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
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        },
        {
            $sort: { "day": 1 }
        }
    ])
        .then(workout => {
            res.json(workout);
        })
        .catch((err) => {
            res.json(err)
        });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        req.params.id,
        { $push: { exercise: req.body } },
        { new: true, runValidators: true }
    )
        .then((workout) => {
            res.json(workout)
        })
        .catch((err) => {
            res.json(err)
        })
});

router.get(`/api/workouts/range`, (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:
                    { $sum: '$exercise.duration' },
                totalWeight:
                    { $sum: 'exercises.weight' }
            }
        }
    ])
        .limit(7)
        .then((workout) => {
            console.log('Workouts Aggregated', workout);
            res.json(workout)
        })
        .catch((err) => {
            res.json(err)
        })
});

module.exports = router;