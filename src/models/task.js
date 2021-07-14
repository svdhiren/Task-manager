//This is the task model containing the description and all.

const mongoose = require('mongoose')

//Validator is not required here.


const Task = mongoose.model('Task', {
    description: {
        type: String, 
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

//We also need to export to other programs
module.exports = Task