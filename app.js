const http = require('http')
// importing http from nodejs

/* function rqListener (req, res) {
}

// executing http
http.createServer(rqListener)
// execute rqListener function */

// or use random function call event driven arctitechure 
const server = http.createServer(function rqListener (req, res) {
  //   console.log(req.url, req.method, req.headers)
  // process.exit() //to quit the server
  // routing requests
  const url = req.url
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>') // help write small html
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button><form></body>')
    res.write('</body>')
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>') // help write small html
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my node.js Serve!</h1></body>')
  res.write('</body>')
  res.end()
})

server.listen(3000)
// event listen never unregistered from
