const http = require('node:http')


const server = http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "application/text" })
    response.end("Hello Holberton School!")
})

server.listen(1245, -'127.0.0.1', () => {

})

module.exports = server