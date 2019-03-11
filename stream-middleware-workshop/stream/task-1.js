const fs = require('fs')
const https = require('https')
const cheerio = require('cheerio')


https.get('https://source.unsplash.com/random', res => {
  res.on('data', chunk => {
    const $ = cheerio.load(chunk.toString())
    const imageUrl = $('a').attr('href')

    https.get(imageUrl, res2 => {
      res2.pipe(fs.createWriteStream('./unsplash.jpeg'))
    })
  })
})
