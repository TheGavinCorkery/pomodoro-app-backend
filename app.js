const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose')

//Load in models
const { Timer } = require('./db/models/timer.model');

//Load middleware
app.use(bodyParser.json());

/* 
 * GET /timers
 * Purpose: Get all timers
*/
app.get('/timers', (req, res) => {
    // Return array of all the timers in the DB
    Timer.find({}).then((timers) => {
        res.send(timers)
    })
})

/* 
 * POST /timers
 * Purpose: Post a new timer
*/
app.post('/timers', (req, res) => {
    // Make a new timer and return new timer document back to user, including ID
    // Timer information fields will be passed in via JSON request body
    let title = req.body.title;
    let workTime = req.body.workTime;
    let shortBreakTime = req.body.shortBreakTime;
    let longBreakTime = req.body.longBreakTime;
    let twoBreaks = req.body.twoBreaks;

    let newTimer = new Timer({
        title,
        workTime,
        shortBreakTime,
        longBreakTime,
        twoBreaks
    })

    newTimer.save().then((timerDoc) => {
        //Full timer document is returned
        res.send(timerDoc);
    })
})

/* 
 * PATCH /timers
 * Purpose: Update an existing timer
*/
app.patch('/timers/:id', (req, res) => {
    // Update specified timer with new values in the JSON body of the request
})

app.delete('/timers/:id', (req, res) => {
    // Delete specified list
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})