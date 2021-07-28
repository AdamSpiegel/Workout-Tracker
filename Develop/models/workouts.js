const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating a new Mongoose Workout Schema
const workoutSchema = new Schema({

    date: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            exerciseType: {
                type: String,
                trim: true,
                required: "Please Enter Exercise Type"
            },
            exerciseName: {
                type: String,
                trim: true,
                required: "Please Enter Exercise Name"
            },
            exerciseDuration: {
                type: Number,
                trim: true,
                required: "Please Enter Total Exercise Duration (in minutes)"
            },
            exerciseDistance: {
                type: Number,
                trim: true,
                required: "Please Enter Total Cardio Exercise Distance (in miles)"
            },
            exerciseWeight: {
                type: Number,
                trim: true,
                required: "Please Enter Total Weight for Exercise"
            },
            exerciseSets: {
                type: Number,
                trim: true,
                required: "Please Enter Total Sets Completed for Exercise"
            },
            exerciseReps: {
                type: Number,
                trim: true,
                required: "Please Enter Total Reps Completed for Exercise"
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;