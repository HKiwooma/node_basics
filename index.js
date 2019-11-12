/* // using ES6 version module
import express from 'express' */

// using v8 version module

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

// body-parser to parse request body data
app.use(bodyParser.urlencoded({extended: true}))

// Setting the view engine to pug
app.set('view engine', 'pug')

// Setting the folder
app.set('views', path.join(__dirname, 'views'))

/* // seting a global variable -way of sharing data
app.set('view engine', 'pug')
app.set('views', 'views') */

// call back fuction for the app fuction to listen port 3000
// Setting the server to port 3000
app.listen(3000, function () {
  console.log('listening on 3000')
})
app.get('/first-templete', (req, res, next) => {
  res.render('index')
})
/* app.post('/first-templete', (req, res) => {
  console.log('Form has be posted')
}) */
// Submit Route
app.post('/thanks', (req, res) => {
  // res.send("Hello " + req.body.firstname)
  res.render('formDataReciever', {
    fname: req.body.firstName,
    lname: req.body.lastName,
    email: req.body.emailAddress,
    gender: req.body.gender,
    country: req.body.country,
    city: req.body.city,
    password: req.body.password
  })
})
/* app.post('/thanks', (req, res) => {
  console.log('Form has be posted')
  // console.log('body', req.body)
  // console.log('Query params', req.query)
  res.send(req.body)
  res.send('Form has be posted')
}) */
/*
// const app = express()
var mongoose = require('mongoose')
// mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/node-demo')
// mongoose.connect('mongodb://localhost:27017/node-demo', { useNewUrlParser: true })
// mongoose.connect(mongoConnectionString, {useUnifiedTopology: true})

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
})
var User = mongoose.model('User', nameSchema)

app.post('/first-templete', (req, res) => {
  var myData = new User(req.body)
  myData.save()
    .then(item => {
      res.send('item saved to database')
    })
    .catch(err => {
      res.status(400).send('unable to save to database')
    })
})
*/

// app.get(path,callback)
// GET Route 
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', (req, res, next) => {
  // user templete to display 
  res.render('login')
})
app.get('/about', (req, res) => {
  res.send('This is about us page')
})

// POST Route 
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

// PUT Route
app.put('/', (req, res) => {
  res.send('Got a PUT request at /user')
})
// DELETE Route
app.delete('/', (req, res) => {
  res.send('Got a DELETE request at /user')
})

// Path Params - set them at the path
app.get('/users/:name', (req, res) => {
  res.send('Hello ' + req.params.name)
})

// query parameter-http://localhost:3000/users?class=node&cohort=3
// Query Params - set them at the url
app.get('/users', (req, res) => {
  res.send('This is class ' + req.query.class + ' cohort ' + req.query.cohort)
})

/*// Error Page
 app.get('*', (req, res) => {
  res.send('Oh sorry! wrong request address. \n Try again')
})
 */
