//Here we will be learning CRUD = Create read update delete operations on the database.

//Alternatively; For destructuring the mongodb object we can use a shortcut as follows:
const {MongoClient, ObjectID} = require('mongodb');


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


    //  db.collection('users2').findOne({name:'Charan'}, (error, user) => {
    //      if(error)
    //      return console.log("Unable to fetch document...");

    //      console.log(user);
    //  })
    //  //The below syntax is the correct way to obtain a document using _id and not just writing id's string representation.
    //  db.collection('users2').findOne({_id: new ObjectID("5fabb3b7ede982055804df6c")}, (error, user) => {
    //     if(error)
    //     return console.log("Unable to fetch document...");

    //     console.log(user);
    // })

    // "find" method returns a cursor (pointer to the data). Through this we can obtain more information.
    //Note that find doesn't have a callback function.
    db.collection('users2').find({age:20}).toArray((error, arr) => {
        if(error)
        return console.log("Unable to fetch...");

        console.log(arr);
    })    
    
    db.collection('users2').find({age: 11}).count((error, cnt) => {
        if(error)
        console.log("unable to fetch...");

        console.log(`Number of requested documents = ${cnt}`);
    })
})
