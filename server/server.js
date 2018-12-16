var express = require('express');
var bodyParser = require('body-parser');   //convert json to object and send it to the server

// local import
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
//var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

// get bodydata sendt from the client
app.use(bodyParser.json());

// rout setUp
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        req.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET listen til alle users
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(port, () => {
    console.log(`Started up af port ${port}`);
}); 


