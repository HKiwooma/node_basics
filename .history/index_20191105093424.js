console.log('Hello World')

const express = require('express')
//usin
const app = express()

/* // call back fuction for the app fuction to listen port 3000
app.listen(3000, function () {
  console.log('listening on 3000')
}) */

// app.listen(3000, ()=> console.log('listening on 3000'))

app.listen(3000, () => {
  console.log('listening on 3000')
})
