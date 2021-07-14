require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c1a63e8f0d4c50656c5ab28').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Now we don't want the above version.
// We want the version with async-await.

// Let's create an async function.

const deleteTaskandCount = async (id) => {

 // Here we use the await to delete the task.
 await Task.findByIdAndDelete(id) 
 var count = await Task.countDocuments({completed: false})

 return count
}

// Let's call the function and apply then and catch methods.

deleteTaskandCount('60550cc509ba49289c4cfe9a').then((result) => {
    console.log('Number of incomplete documents:', result)    
}).catch((e) => {
    console.log('Error:', e)
})

