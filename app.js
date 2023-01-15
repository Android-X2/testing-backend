//Set up dependencies
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const path = require("path");
const connectDB = require('./config/database')

//Routes
const mainRoutes = require('./routes/main')

//Set up config files
require('dotenv').config({path: './config/.env'})

//Passport Config
require('./config/passport')(passport)
connectDB()


// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });  

//allows for specific middleware to be used whenever a request is sent 
//to the server
app.use(express.urlencoded({ extended: true })) //allows for incoming data to be recognized as string data
app.use(express.json())//allows for incoming data as a JSON object


app.use('/',mainRoutes)

const PORT = process.env.PORT

app.listen(process.env.PORT, ()=>{
    console.log(`Server is on ${PORT}`)
})