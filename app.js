const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const pug = require('pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.listen(port, () => {
  console.log('Server listening on port ' + port)
})

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/node-demo')

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
})

var User = mongoose.model('User', nameSchema)

app.post('/addname', (req, res) => {
})

app.post('/addname', (req, res) => {
  var myData = new User(req.body)
  myData.save()
    .then(item => {
      res.send('item saved to database')
    })
    .catch(err => {
      res.status(400).send('unable to save to database')
    })
})
