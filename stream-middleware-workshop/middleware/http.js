const http = require('http')
const request = require('supertest')

const hostname = '127.0.0.1'
const port = 2333

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('Hello ')
  res.write('World ')
  res.end('!!!!')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

request(server).get('/')
  .expect(200)
  .expect('Content-Type', 'text/plain')
  .expect('Hello World !!!!')
  .end((err, res) => {
    if (err) console.log(err)
    console.log(res.text)
  })

