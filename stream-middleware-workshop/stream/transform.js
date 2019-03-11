const { Readable, Writable, Transform } = require('stream')


const rs = new Readable({
  read() {}
})

const ws = new Writable({
  write(chunk, encoding, cb) {
    console.log('write', chunk.toString())
    cb()
  }
})

function through(transformer) {
  class Through extends Transform {
    constructor(opts) {
      super(opts)
    }

    _transform(chunk, encoding, cb) {
      const result = transformer(chunk, encoding)
      if (result.then && typeof result.then === 'function') {
        result.then(val => {
          this.push(val)
          cb()
        }).catch(err => cb(err))
      } else {
        this.push(result)
        cb()
      }
    }
  }

  return new Through
}

rs.push('Hello')
rs.push('World')

// rs.pipe(through((chunk) => {
//   console.log('transform', chunk.toString())
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(chunk.toString().split('').reverse().join(''))
//     }, 2000)
//   })
// })).pipe(through((chunk) => {
//   return chunk.toString() + '!!!'
// })).pipe(ws)

module.exports = {
  through
}
