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
 
    //  const updatePromise = db.collection('users2').updateOne({
    //     //In this argument we specify the matching parameter. 
    //     name: 'Aakash'
    //  }, {
    //     //In this argument we specify the modification using the below syntax.
    //     $set: {
    //         name: 'Jake'
    //     } 
    //  })

    //  updatePromise.then((result) => {
    //      console.log(result);
    //  }).catch((error) => {
    //      console.log("Error...  ", error);
    //  })

    //Instead of using 'updatePromise' we can directly chain the "then" and "catch" to the "updateOne" method.
    //  db.collection('users2').updateOne({
    //     //In this argument we specify the matching parameter. 
    //     name: 'Nathan'
    //  }, {
    //     //In this argument we specify the modification using the below syntax.
    //     //$set modifies the value of a field.        
    //     // $set: {
    //     //     name: 'Nathan'
    //     // }

    //     //$inc increments the field value by the specified amount.
    //     $inc: {
    //         age: 1
    //     }
    //  }).then((result) => {
    //      console.log(result);
    //  }).catch((error) => {
    //      console.log("Error...  ", error);
    //  })

    db.collection('users2').updateMany({
        //In this argument we specify the matching parameter. 
        age: 10
     }, {                
        $set: {
            age: 12
        }

     }).then((result) => {
         console.log(result);
     }).catch((error) => {
         console.log("Error...  ", error);
     })
    
})
