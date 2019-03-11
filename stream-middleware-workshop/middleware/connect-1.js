const http = require('http')
const request = require('supertest')

const hostname = '127.0.0.1'
const port = 2333

function connect() {
  return new App
}

class App {
  constructor() {
    this.stack = []
    return this
  }
  use(middleware) {
    this.stack.push(middleware)
    return this
  }
  handle(req, res) {
    let index = 0
    let stack = this.stack

    function next() {
      const handler = stack[index++]

      if (!handler) {
        return res.end()
      }

      handler(req, res, next)
    }

    next()
  }
  listen(port, path, cb) {
    this.server = http.createServer((req, res) => {
      this.handle(req, res)
    })
    return this.server.listen(port, path, cb)
  }
}

const app = connect()

app.use((req, res, next) => {
  res.write('Hello')
  next()
})

app.use((req, res, next) => {
  res.write('World')
  setTimeout(() => {
    next()
  }, 3000)
})

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

request(server)
  .get('/')
  .expect('HelloWorld')
  .end((err, res) => {
    if (err) console.log(err)
    console.log(res.text)
  })
