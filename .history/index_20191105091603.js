console.log('Hello World')

const express = required('express')
const app = express()

// call back fuction
app.listen(3000, function () {
  console.log('listening on 3000')
})
app.listen(3000, () {
  console.log('listening on 3000')
})
