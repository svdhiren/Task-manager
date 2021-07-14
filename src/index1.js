//This is the starting point of the application.


/*
COMMAND TO CONNECT TO THE DATABASE
*******************************
/Users/hp/mongodb/bin/mongod --dbpath=/Users/hp/mongodb-data
*******************************
*/

const express = require('express') //Import the express module.
const User = require('./models/user') //Here we are importing the model from the user.js file.
const Task = require('./models/task') //We are also importing the model from the task.js file.
const { Mongoose, model } = require('mongoose')
require('./db/mongoose') //We do not need to store anything. This connects this application to the database.

app = express() //Express application is created.

//Since we will deploy this to the heroku app, we need to create a port.
const port = process.env.PORT || 3000
//If the port given by the process.env gives an error then we will be using local port which is 3000.

//The http methods such as get, post, patch, delete are all provided by express.

app.use(express.json()) //This basically tells the server to automatically parse whatever json data is incoming.


//Let us create a user.
//The first argument is the path which is '/users' in this case.
//So this route has to be accessed by the client whenever he wants to create a user.
app.post('/users', (req, res) => {
    //Body of the request contains the information entered by the client.
    console.log(req.body)    
    //Since we have the body and the database connected, 
    //just create a new user here by using the model we just imported.
    const user = new User(req.body)

    //Save it to the database.
    user.save().then(() => {
       console.log('Received the data!!')
       res.send(user)
    }).catch((e) => {        
        res.status(400).send(e)
    })
})

app.post('/tasks', (req, res) => {
    console.log('Received the task...')

    const task = new Task (req.body)

    //SAve the task.
    task.save().then(() => {
        console.log('Created the task!')
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })    
})

//WE also want to retrieve the users. Hence we use get.
//Check the mongoose docs under "guidance > query" for relevant functions.
app.get('/users', (req, res) => {

    //model.find() finds all the documents if nothing is specified.
    User.find({}).then( (ans) => {
        res.send(ans)    
    }).catch( (e) => {
        // res.status(500).send() 
        // The above command has been removed from the current version of express.
        // Use this instead.
        res.sendStatus(500)
    })
})

//Let us also create a "get" for retrieving users by id.

app.get('/users/:id', (req, res) => {
    
    // Get the id from the link into a variable from params.id
    const _id = req.params.id    

    User.findById(_id).then( (answer) => {
        // Now check whether it is empty. If it is, then send a 404 error
        if(!answer)
            return res.sendStatus(404)
        
        else
            res.send(answer)
    }).catch( (e) => {
        res.sendStatus(500)
    })        
})

// Here we will write get methods to fetch tasks.

app.get( "/tasks", (req, res) => {

    Task.find({}).then( (ans) => {
        res.send(ans)
    }).catch( (e) => {
        res.sendStatus(500)
    })
})

app.get( "/tasks/:id", (req, res) => {
    
    const id = req.params.id
    Task.findById(id).then( (ans) => {
        if(!ans)
            return res.sendStatus(404)

        res.send(ans)
    }).catch( (e) => {
        res.sendStatus(500)
    })
})


//Server starts listening.
app.listen(port, () => {
    console.log('Server is up and running...')
})