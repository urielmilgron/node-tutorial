const http = require('node:http') // we allow create a http server, received petition and request
const { availablePort } = require('./free-port-app')
const server = http.createServer((req, res) => {
  console.log('Request received' + req)
  res.end('This is response for request')
}) // A server just receive petition or return response

availablePort(24005).then(port => {
  server.listen(port, () => {
    console.log('Port: ', port)
  })
})
