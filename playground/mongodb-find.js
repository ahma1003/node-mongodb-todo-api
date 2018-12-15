// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {  // db -> client
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // how to find data
    // find({}) -> find by specific value 

    // db.collection('Todos').find({
    //     _id: new ObjectID ('5c1447fa50e012dee4705b76')
    //     }).toArray().then ((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unabale to fetch todos', err);
    // });

    db.collection('Users').find({age:28}).toArray().then ((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unabale to fetch users', err);
    });

    // how to count the collections in MongoDB
    // db.collection('Todos').find().count().then ((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unabale to fetch todos', err);
    // });

   // client.close();
});