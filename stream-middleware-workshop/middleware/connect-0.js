const http = require('http')
const connect = require('connect')
const request = require('supertest')
const assert = require('assert')

const hostname = '127.0.0.1'
const port = 2333

const app = connect()

app.use((req, res, next) => {
  res.write('First\n')
  next()
  console.log('First')
})

app.use((req, res, next) => {
  res.write('Second\n')
  next()
  console.log('Second')
})

app.use((req, res, next) => {
  res.write('Third\n')
  next()
  console.log('Third')
})

app.use((req, res) => {
  res.end()
})

const server = http.createServer(app)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

request(server)
  .get('/')
  .expect((res) => {
    assert.equal(res.text, 'First\nSecond\nThird\n')
  })
  .end((err, res) => {
    if (err) console.log(err)
    console.log(res.text)
  })
