const http = require('http');
const connect = require('connect');
const fs = require('fs');
const request = require('supertest');

const host = '127.0.0.1';
const port = 2333;

function proxyMiddleware(option) {
  const {link} = option;

  return (req, res, next) => {
    const proxyReq = http.get(link, (proxyRes) => {
      proxyRes.pipe(res);
    })
    next();
  }
}

function dumpMiddleware(option) {
  const {fileName} = option;
  const file = fs.createWriteStream(fileName, (error) => {
    console.log('open file error:', error);
  });

  return (req, res, next) => {
    const _write = res.write;
    const _end = res.end;

    res.write = function write(chunk) {
      file.write(chunk);
      _write.call(res, chunk);
    }

    res.end = function end() {
      _end.call(res);
    }
  }
}

const app = connect();
app.use(proxyMiddleware({
  link: 'http://nodejs.org/dist/index.json'
}));

app.use(dumpMiddleware({
  fileName: 'dampData'
}))

const server = http.createServer(app).listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

request(server)
  .get('/')
  .expect(200)
  .expect('Content-Type', 'text/plain')
  .end((err, res) => {
    if (err) console.log(err);
    console.log(res.text);
  })
