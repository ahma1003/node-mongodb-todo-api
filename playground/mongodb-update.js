// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {  // db -> client
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({                   //takes 4 arguments (filter,update,option,callback)
        _id: new ObjectID('5c17b2ee50e012dee4707bd9')
    }, {
        $set: {
            text: 'Ridha Ahmad'
        } 
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

   // client.close();   
});