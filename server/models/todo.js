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

// removed in the program !!
// var newTodo = new Todo({
//     //text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo! ', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// })


module.exports = {Todo};   // export variable Todo med skemaet