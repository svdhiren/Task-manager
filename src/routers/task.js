const express = require('express')
const User = require('../models/task') 
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    console.log('Received the task...')
    const task = new Task (req.body)

    try {
        await task.save()
        console.log('Created the task!')
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }    
})

// Here we will write get methods to fetch tasks.

router.get( "/tasks", async (req, res) => {

    try {
        const ans = await Task.find({})
        res.send(ans)
    } catch(e) {
        res.sendStatus(500)
    }
})

router.get( "/tasks/:id", async (req, res) => {
        
    const _id = req.params.id           
    try {
        const ans = await Task.findById(_id)
        if(!ans)
            return res.sendStatus(404)
        else
            res.send(ans)
    } catch(e) {
        res.sendStatus(500)
    }
})




router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const actual_updates = ['completed', 'description']

    // Refer to the in-built api reference for 'every' method.
    const isValid = updates.every((key) => actual_updates.includes(key))

    if(!isValid)
    {
        return res.status(400).send("Don't just give unknown keys LOL...")
    }


    try {
        // Here we use the await for the update method.
        // Check the api reference for the below method for more clarity.
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        console.log(task)
        if(!task)
            res.sendStatus(404)
        else
            res.send(task)

    } catch (e) {
        res.sendStatus(500)
    }
 })




router.delete('/tasks/:id', async (req, res) => {

    try{
        // Here again use the await and delete.
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task)
            return res.sendStatus(404)
        console.log(task)        
        res.send(task)
    } catch(e){
        res.sendStatus(500)
    }

})

module.exports = router