//Instead of defining the models in the mongoose.js, it is better to define them here.

const mongoose = require('mongoose');
const validator = require('validator');

//Model is sort of like a template for the data we will store in the future.
//First argument : Name for the model.
//Second argument : Properties in the document
const User = mongoose.model('User', {
    //Here we specify the properties and each property can be an object where we define validations, types, etc.
    name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true // This is known as sanitization which is basically simplifying the field values rather than validating them.        
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
             throw new Error('Not a valid email...');
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(value.toLowerCase().includes('password'))
                throw new Error('Password cannot contain "password"...')
        }    
    },
    age: {
        type: Number,
        required: false,
        trim: true,        
        //Mongoose doesn't have much built-in validators, hence we can create a custom validator as a function.
        validate(value) {
            if(value < 0)
            throw new Error('Age must be positive number...'); //If the given age is negative we throw an error.
        }
    }
})

//We want other files to access the 'User' model.

module.exports = User