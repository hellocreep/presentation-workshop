const http = require('http')
const fs = require('fs')
const zlib = require('zlib')


http.createServer((req, res) => {
  const rs = fs.createReadStream('./package-lock.json')

  rs.on('data', chunk => {
    console.log('---------------------------------------')
    console.log(chunk.toString())
  })

  rs.pipe(zlib.createGzip()).pipe(res)
}).listen(8000)
