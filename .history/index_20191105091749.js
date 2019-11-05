console.log('Hello World')

const express = require('express')
const app = express()

// call back fuction
app.listen(3000, function () {
  console.log('listening on 3000')
})

