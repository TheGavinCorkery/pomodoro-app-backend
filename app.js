const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose')

//Load in models
const { Timer } = require('./db/models/timer.model');
const { User } = require('./db/models/user.model')

//Load middleware
app.use(bodyParser.json());

//Connection confirmation
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

//Timer model endpoints

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

//User model endpoints

/* 
 * GET /users
 * Purpose: Get user document based on id passed in JSON request body
*/
app.get('/users', (req, res) => {
    // Return user object if match is found
    userId = req.body.id
    User.findById(userId).then((users) => {
        res.send(users)
    }).catch((err) => {
        res.send("There is no matching users or there was an error in your request.")
        res.send(err)
    })
})

/* 
 * POST /users
 * Purpose: Create a new user
*/
app.post('/users', (req, res) => {
    // Make a new user and return new user document back, including ID
    // User information fields will be passed in via JSON request body
    let firstName = req.body.firstName;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    let newUser = new User({
        firstName,
        username,
        email,
        password
    })

    newUser.save().then((userDoc) => {
        //Full timer document is returned
        res.send(userDoc);
    })
})