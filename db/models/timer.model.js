const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimerSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    workTime: {
        type: Number,
        required: true,
    },
    shortBreakTime: {
        type: Number,
        required: true,
    },
    longBreakTime: {
        type: Number,
        required: false,
    },
    twoBreaks: {
        type: Boolean,
        required: true
    }
})

const Timer = mongoose.model('Timer', TimerSchema);

module.exports = {Timer}