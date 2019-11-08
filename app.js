const http = require('http')
// importing http from nodejs

/* function rqListener (req, res) {
}

// executing http
http.createServer(rqListener)
// execute rqListener function */

// or use random function call event driven arctitechure 
const server = http.createServer(function rqListener (req, res) {
  console.log(req)
})

server.listen(3000)
