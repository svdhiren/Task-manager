// Just require the mongoose.js so that we have access to the connected database.
require('../src/db/mongoose')

// We also want the user.
const User = require('../src/models/user')

// Applying some CRUD operations.

// 1. Using promise chaining.
// User.findByIdAndUpdate('604a7e6b31d4be44c8632e83', { age: 12}).then( (result) => {
//     console.log(result)

//     // Promise chaining.
//     return User.countDocuments({age : 12})
// }).then( (result) => {
//     console.log("Number of docs with age 12: ", result);
// }).catch( (e) => {
//     console.log(e);
// })

// 2. Using async-await.
// Let's use async and await here.
const updateAge_Count = async (id, age) => {
    // Now here we use await.
    const user = await User.findByIdAndUpdate(id, {age: age}) //If we are using the same name then age:age can be changed to just age.
    console.log(user.name);
    const count = await User.countDocuments({age : 12})

    return count
}

// Here we can call the updateAge_Count function and receive a promise.

updateAge_Count('604a7e6b31d4be44c8632e83', 12).then((result) => {
    console.log('Number of people with that age: ', result);
}).catch((e) => {
    console.log('Error: ', e);
})
