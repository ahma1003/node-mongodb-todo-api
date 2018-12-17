var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// // create new object in mongodb
// var newTodo = new Todo({
//     text: 'drink coffe'
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo')
// });


module.exports = {Todo};   // export variable Todo med skemaet