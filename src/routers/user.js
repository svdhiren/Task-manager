const express = require('express')
const User = require('../models/user') 
const router = new express.Router()

// So this has been done to separete the routes for users and tasks to make it less clumsy.
// Here we will right all the get, post, update, delete methods 
// but call app.use() for this in the main application (ie., index.js)


//Let us create a user.
//The first argument is the path which is '/users' in this case.
//So this route has to be accessed by the client whenever he wants to create a user.
router.post('/users', async (req, res) => {
    
    // Here we will want a try and catch block.
    console.log(req.body)   
    const user = new User(req.body)
    try{
        // Now we save the user using await.
        await user.save()
        // The control will reach here only if the save was successful.
        console.log('Received the data!!')
        res.send(user)
    } catch(e) {
        res.status(400).send(e)
    }

})

//WE also want to retrieve the users. Hence we use get.
//Check the mongoose docs under "guidance > query" for relevant functions.
router.get('/users', async (req, res) => {

    //model.find() finds all the documents if nothing is specified.
    try {
        const ans = await User.find({})
        res.send(ans)
    } catch(e) {
        res.sendStatus(500)
    }
})

//Let us also create a "get" for retrieving users by id.

router.get('/users/:id', async (req, res) => {
    
    // Get the id from the link into a variable from params.id
    const _id = req.params.id           
    try {
        const ans = await User.findById(_id)
        if(!ans)
            return res.sendStatus(404)
        else
            res.send(ans)
    } catch(e) {
        res.sendStatus(500)
    }
})

// So we have written post and get methods.
// Let us do the update.

router.patch("/users/:id", async (req, res) => {

    // Mongoose basically doesn't check whether we are providing correct keys. It simply ignores it.

    // Let's perform a simple check for that.
    const updates = Object.keys(req.body)
    const actual_updates = ['name', 'age', 'password', 'email']

    // Refer to the in-built api reference for 'every' method.
    const isValid = updates.every((key) => actual_updates.includes(key))

    if(!isValid)
    {
        return res.status(400).send("Don't just give unknown keys LOL...")
    }


    try {
        // Here we use the await for the update method.
        // Check the api reference for the below method for more clarity.
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        console.log(user)
        if(!user)
            res.sendStatus(404)
        else
            res.send(user)

    } catch (e) {
        res.sendStatus(500)
    }

 })

 // Let us make the delete routes as well
router.delete('/users/:id', async (req, res) => {

    try{
        // Here again use the await and delete.
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user)
            return res.sendStatus(404)
        console.log(user)        
        res.send(user)
    } catch(e){
        res.sendStatus(500)
    }

})

module.exports = router