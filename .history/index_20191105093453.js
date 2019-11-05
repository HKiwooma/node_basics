console.log('Hello World')

import express from 'express'
// using ES6 version
import express from 'express'
const app = express()

/* // call back fuction for the app fuction to listen port 3000
app.listen(3000, function () {
  console.log('listening on 3000')
}) */

// app.listen(3000, ()=> console.log('listening on 3000'))

app.listen(3000, () => {
  console.log('listening on 3000')
})
