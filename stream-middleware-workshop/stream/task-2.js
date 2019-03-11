const http = require('http')
const fs = require('fs')
const { Transform } = require('stream')
const imageToAscii = require('image-to-ascii')
const {through} = require('./transform')


fs.createReadStream(__dirname + '/../unsplash.jpeg').pipe(through((chunk) => {
  return new Promise((resolve, reject) => {
    imageToAscii(chunk, (err, converted) => {
      if (err) reject(err)
      resolve(converted)
    })
  })
})).pipe(process.stdout)
