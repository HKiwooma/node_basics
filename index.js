const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.set('view engine', 'pug') // Setting the view engine to pug
app.set('views', path.join(__dirname, 'views')) // Setting the folder path

// body-parser to parse request body data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// database - make a connection
mongoose.connect('mongodb://localhost:27017/database_name')

// Schema defintion
const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: 'Please Enter first name'
  },
  lastName: String,
  emailAddress: String,
  gender: String,
  country: String,
  city: String
})
// creating model for the schema with collection name
const Register = mongoose.model('Register', registrationSchema)

// Routes
app.get('/register', (req, res, next) => {
  res.render('index')
})
// a document instance
app.post('/registered', (req, res) => {
  const myRegister = new Register(req.body)
  // save data using scheme collection name 'Register' to database
  myRegister.save()
    .then(item => {
      Register.find().then(
        items => {
          res.render('list',{users:items})
        })
      res.send('item saved to database')
    })
    .catch(err => {
      res.status(400).send('unable to save to database')
    })
})
// Setting the server to listen on port 3000
app.listen(3000, function () {
  console.log('listening on 3000')
})

