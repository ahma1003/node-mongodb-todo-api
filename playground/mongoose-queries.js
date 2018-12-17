const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo}     = require('../server/models/todo'); 

Todo.findById('5c1813a8c8d0aa25146bcabf').then((todo) => {
    if (!todo) { 
        return console.log('Id not found');
    }
    console.log(JSON.stringify(todo, undefined, 2));
});
 