console.log('Hello World')

/* // using ES6 version module
import express from 'express' */

// using v8 version module
const express = require('express')
const app = express()

/* // call back fuction for the app fuction to listen port 3000
app.listen(3000, function () {
  console.log('listening on 3000')
}) */

// 
app.listen(3000, ()=> console.log('listening on 3000'))


