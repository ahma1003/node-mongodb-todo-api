var express = require('express');
var bodyParser = require('body-parser');   //convert json to object and send it to the server
var hbs = require('hbs');


// local import
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');


var app = express();
const port = process.env.PORT || 3000;

// to use the media stof
app.use('/static', express.static('public'));


// get bodydata sendt from the client
app.use(bodyParser.json());

// 1. route setUp, create new todos  url and callback
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

// 2. route GET listen til alle users
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});


//new style changes 
app.get('/', (req,res) => {
    res.render('home.hbs', {
        pageTitle: "Home Page",
        WelcomeMessage: "Welcome to my website"
    });
});

// port listner
app.listen(port, () => {
    console.log(`Started up af port ${port}`);
}); 


