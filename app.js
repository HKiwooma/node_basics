const http = require('http')
// importing http from nodejs

/* function rqListener (req, res) {
}

// executing http
http.createServer(rqListener)
// execute rqListener function */

// or use random function call event driven arctitechure 
const server = http.createServer(function rqListener (req, res) {
  console.log(req.url, req.method, req.headers)
  // process.exit() //to quit the server
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>') // help write small html
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my node.js Serve!</h1></body>')
  res.write('</body>')
})

server.listen(3000)
// event listen never unregistered from
