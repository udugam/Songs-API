//Loads environment keys
require('dotenv').config()

//Require and create express app
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')

//Import apple music related libraries
const jwt = require('apple-music-jwt')
const fs = require('fs')

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var keyID = process.env.APPLE_MUSIC_KEY_ID
var teamID = process.env.APPLE_TEAM_ID
var secret = fs.readFileSync("AuthKey.p8").toString();
var token = jwt.generate(keyID, teamID, secret);

//Import routes
require('./routes')(app,token)

//Start server on PORT
app.listen(PORT, function() {
    console.log(`App is listening on port: ${PORT}`)
})

