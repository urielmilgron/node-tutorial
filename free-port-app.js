const net = require('node:net') // TCP protocol

function availablePort (findPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(findPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (err) => {
      if (err === 'EADDRINUSE') {
        availablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports= {availablePort}
