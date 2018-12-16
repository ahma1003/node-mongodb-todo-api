// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {  // db -> client
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c14540d50e012dee4705f80')
    }, {
        $set: {
            completed: true
        } 
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

   // client.close();   
});