//This is the starting point of the application.

// HERE WE HAVE REMOVED PROMISE CHAINING AND USING ASYNC-AWAIT.
/*
COMMAND TO CONNECT TO THE DATABASE
*******************************
/Users/hp/mongodb/bin/mongod --dbpath=/Users/hp/mongodb-data
*******************************
*/

const express = require('express') //Import the express module.
const { Mongoose, model } = require('mongoose')
const { response } = require('express')
const { ObjectID } = require('bson')
require('./db/mongoose') //We do not need to store anything. This connects this application to the database.
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

app = express() //Express application is created.

//Since we will deploy this to the heroku app, we need to create a port.
const port = process.env.PORT || 3000
//If the port given by the process.env gives an error then we will be using local port which is 3000.

//The http methods such as get, post, patch, delete are all provided by express.
//A separate file has been created with all the CRUD operations.
// In order to use those "app.use()" has to used.

app.use(express.json()) //This basically tells the server to automatically parse whatever json data is incoming.
app.use(userRouter)
app.use(taskRouter)



//Server starts listening.
app.listen(port, () => {
    console.log('Server is up and running...')
})