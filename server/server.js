var express = require('express');
var bodyParser = require('body-parser');   //convert json to object and send it to the server

// local import
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// get bodydata sendt from the client
app.use(bodyParser.json());

// rout setUp
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text:req.body.text
    });
    
    todo.save().then((doc) => {
        req.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
}); 


