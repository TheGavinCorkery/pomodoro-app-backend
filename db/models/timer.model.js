const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const TimerSchema = new mongoose.Schema({
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