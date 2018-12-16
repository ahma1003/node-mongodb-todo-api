const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo'); 

Todo.findById('5c165b2969aa527d15e6a8ca').then((todo) => {
    if (!todo) { 
        return console.log('Id not found');
    }
    console.log(JSON.stringify(todo, undefined, 2));
}).catch((e) => console.log(e));
