const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/Futurama')


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'static')))

app.get ("/", function (req, res, next){
  // db.collection("users").find().toArray(function(error,users){
  //   console.log(users)
  // })
})

app.listen(3000, function(){
  console.log("Listening on port 3000")
})