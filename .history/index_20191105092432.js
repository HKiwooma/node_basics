console.log('Hello World')

const express = require('express')
const app = express()

/* // call back fuction to listen o
app.listen(3000, function () {
  console.log('listening on 3000')
}) */

// app.listen(3000, ()=> console.log('listening on 3000'))

app.listen(3000, () => {
    console.log('listening on 3000')
})
