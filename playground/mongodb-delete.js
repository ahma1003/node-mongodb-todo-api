// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {  // db -> client
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany *
    // db.collection('Todos').deleteMany({text: 'Eat food'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne 1
    // db.collection('Todos').deleteOne({text:'Eat falafel'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete -> X
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

   // client.close();   
});