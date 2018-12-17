var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
// connect to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');   // 'mongodb://localhost:27017/TodoApp');

// exported to other files
module.exports = {mongoose};





// MONGODB_URI: mongodb://heroku_2vx5dwd1:ov686924gnmcbo8v7k636vdr8d@ds135760.mlab.com:35760/heroku_2vx5dwd1
// https://quiet-temple-14143.herokuapp.com