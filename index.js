// console.log('Hello World')

/* // using ES6 version module
import express from 'express' */

// using v8 version module
const express = require('express')
const app = express()
const router = express.Router()

//seting a global variable-way of sharing data
app.set('view engine', 'pug')
app.set('views', 'views')


/* // call back fuction for the app fuction to listen port 3000
app.listen(3000, function () {
  console.log('listening on 3000')
}) */

// app.get(path,callback) 
//req-request, res-response
router.get('/',function(req,res){ 
    res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('listening on 3000')
})

app.get('/', (req, res) => res.send('Hello World!'))



app.get('/login', (req, res, next) => {
  //user templete to display 
  res.render('login')
})

app.get('/about', (req, res) => {
  res.send('This is about us page')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.get('/users', (req, res) => {
  res.send('This is class '+req.query.class+'cohort '+req.query.cohort)
}) 





app.get('*', (req, res) => {
  res.send('Oh sorry! wrong request address. \n Try again')
})
