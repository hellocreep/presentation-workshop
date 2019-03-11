const http = require('http')
const connect = require('connect')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const request = require('supertest')

const hostname = '127.0.0.1'
const port = 2333

const app = connect()

const User = {
  getData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Helen Wang',
          phoneNumber: 123456789
        })
      }, 1000)
    })
  }
}

function auth(req, res, next) {
  if(req.body.token === 'some token') {
    next()
  } else {
    res.statusCode = 415
    res.end('not authed')
  }
}

app.use(morgan('combined'))

app.use('/home', (req, res, next) => {
  res.write('Home Page')
  next()
})

app.use('/user', bodyParser.json())
app.use('/user', auth)
app.use('/user', (req, res, next) => {
  User.getData().then(user => {
    res.write(user.name)
    res.write(user.phoneNumber.toString())
    next()
  })
})

app.use((req, res) => {
  res.end()
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

request(app)
  .get('/home')
  .expect(200)
  .expect('Home Page')
  .end((err, res) => {
    if(err) console.log(err)
  })

request(app)
  .post('/user')
  .send({token: 'some token'})
  .expect(200)
  .end((err, res) => {
    if (err) console.log(err)
    console.log(res.text)
  })
