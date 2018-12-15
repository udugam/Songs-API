//Loads environment keys
require('dotenv').config()

//Require and create express app
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Import routes
require('./routes')(app)

//Start server on PORT
app.listen(PORT, function() {
    console.log(`App is listening on port: ${PORT}`)
})