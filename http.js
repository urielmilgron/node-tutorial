const http = require('node:http') // we allow create a http server, received petition and request

const server = http.createServer((req, res) => {
  console.log('Request received' + req)
  res.end('This is response for request')
}) // A server just receive petition or return response

server.listen(0, () => { // If you have another app in port 3000, you can use port 0, this find a empty port
  console.log(`server listening on port http://localhost:${server.address().port}`) // And this command help you know the port that finded
})
