//Here we will be learning CRUD = Create read update delete operations on the database.

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient // This helps us to connect to the database.
const ObjectID = mongodb.ObjectID; //This is for us to explicitly create our own id for the records in the collection.

//Alternatively; For destructuring the mongodb object we can use a shortcut as follows:
//const {MongoClient, ObjectID} = require('mongodb');

//Just printing out a random id along with a timestamp.
const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
console.log(id.id.length); // Length of the id in binary represenatation.
console.log(id.toHexString().length); //Length of the id in string representation.
//Binary representation takes lesser space than string.

//The variables required for connection to the database are below:
const connectionURL = 'mongodb://127.0.0.1:27017' // The numbers before 27017 is the ip address of the local host.
const databaseName = 'task-manager'

//useNewUrlParser will tell node js to use the url provided by us rather than the default.
//useUnifiedTopology is just to adopt newer versions chill. It was just a compiler given by the compiler so I added it to the constructor.
MongoClient.connect(connectionURL, { useUnifiedTopology: true }, { useNewUrlParser: true}, (error, client) => {
     if(error)
     return console.log('Unable to connect');

     // console.log('Connected successfully!');
     //If the connection is successful then we will create the database and
     //get a reference by the following command.
     const db = client.db(databaseName);

     //NOTE: An SQL database consists of tables and rows, whereas NoSQL database consists
     //of collections and fields similar to json.
     //We are trying to insert a new collection with name 'users' into the database.
    //  db.collection('users1').insertOne({
    //    _id: id, // We are adding our own id rather than automatically generating one.
    //    name: 'Bittu',
    //    age: 23
    //  }, (error, result) => {  // The second argument is a callback function. This is helpful for us to know whether the data was inserted properly.
    //    if(error)
    //    return console.log('Unable to insert user');
     
    //    //result contains the document array 'ops' inserted into the 'users' collection. In this case array size is just 1.
    //    console.log(result.ops);
    //  })

     //The above commented code was an example of inserting one document at a time (insertOne).
     //Now let's see how to insert multiple documents at once.
     db.collection('users2').insertMany([
       {
         name: 'Aakash',
         age: 20
       },
       {
         name: 'George',
         age: 18
       },
       {
         name: 'Manvit',
         age: 11
       }
     ], (error, result) => {
       if(error)
       return console.log('Unable to insert the documents');

       console.log(result.ops);
     })

})
