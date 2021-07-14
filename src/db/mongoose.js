//NOTE THAT WE WON'T BE USING THE LOW LEVEL API PROVIDED BY MONGO.DB.
//INSTEAD, WE WILL BE USING A MUCH SIMPLER API PROVIDED BY MONGOOSE
//THROUGH WHICH WE CAN DO THE SAME CRUD OPERATIONS AND ALSO PROMISES. 

const mongoose = require('mongoose');

//Here we not only mention the url but also the nam of the database which is mentioned after the forward slash.
//The below function is similar to MongoClient.connect.
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true, // This allows mongoose to create the index for each document.
    useUnifiedTopology: true,
    useFindAndModify: false
});



//Now we create documents using the model that we imported.
//Below is just an example for saving the documents.

// const demo_user = new User({
//     name: '     charan ',
//     email: '    cherry@gmaIl.Com   ',
//     password: 'hellobroPaSsword',
// })
// //Here we did not save it to the database. To save it "save()" method is used and returns a promise as shown below.

// demo_user.save().then(() => {
//     console.log(demo_user);
// }).catch((error) => {
//     console.log('Error...  ', error);
// })
