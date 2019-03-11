const { Readable } = require('stream')


const rs = new Readable({
  read() {}
})

rs.on('data', chunk => {
  console.log('waiting........')
  rs.pause()
  setTimeout(() => {
    console.log('resumed', chunk.toString())
    rs.resume()
  }, 2000)
})

rs.on('end', () => {
  console.log('end')
})

// rs.on('readable', () => {
//   console.log('readable', rs.read().toString())
// })

rs.push('Hello\n')
rs.push('World\n')
