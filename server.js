'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({port: 8080, host: '0.0.0.0'})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Welcome to the s2i Hapi')
  }
})

server.route({
  method: 'GET',
  path: '/ping',
  handler: function (request, reply) {
    reply().code(204)
  }
})




  server.start((err) => {
    if (err) {
      throw err
    }
    console.info(`Server running at: ${server.info.uri}`)
  })
