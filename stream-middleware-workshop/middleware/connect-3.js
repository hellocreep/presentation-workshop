const connect = require('connect');
const http = require('http');
const request = require('supertest')

const hostname = '127.0.0.1'
const port = 2333

const app = connect();

const User = {
  getData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Xu BoBo',
          phoneNumber: 123456789
        })
      }, 1000)
    })
  }
}

function mosaic(key) {
  return (req, res, next) => {
    const _write = res.write
    const _end = res.end

    res.write = function write(chunk) {
      let user = JSON.parse(chunk.toString())
      user[key] = user[key].replace(/^\w{2}/, 'XX')
      _write.call(res, JSON.stringify(user))
    }

    res.end = function end() {
      console.log('end')
      _end.call(res)
    }

    next()
  }
}

app.use(mosaic('name'))

app.use((req, res, next) => {
  User.getData().then(user => {
    res.write(JSON.stringify(user))
    next()
  })
});


app.use((req, res) => {
  res.end()
})

const server = http.createServer(app)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

request(server)
  .get('/')
  .expect(200)
  .expect(JSON.stringify({name: "XX BoBo", "phoneNumber": 123456789}))
  .end((err, res) => {
    if (err) console.log(err)
    console.log(res.text)
  })
