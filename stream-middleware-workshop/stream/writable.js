const { Readable, Writable } = require('stream')


const rs = new Readable({
  read() {}
})


const ws = new Writable({
  highWaterMark: 1,
  write(chunk, encoding, cb) {
    console.log('write', chunk.toString())
    cb()
  }
})

// rs.on('data', chunk => {
//   if(!ws.write(chunk)) {
//     rs.pause()
//   }
// })

// rs.on('end', () => {
//   ws.end()
// })

// ws.on('drain', () => {
//   rs.resume()
//   console.log('drain')
// })

ws.on('finish', () => {
  console.log('finish')
})


rs.push('hello')
rs.push('world')
rs.push(null)

ws.write('biubiubiu')

rs.pipe(ws)
