const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating a new Mongoose Workout Schema
const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now()
    },

    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number

        }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;