# Stream Workshop

---
# Preparation

* node.js >= 7.10
* clone git@github.com:hellocreep/stream-middleware-workshop.git
* git checkout -b stream origin/stream
* brew install graphicsmagick
* npm install
* open https://nodejs.org/dist/latest-v8.x/docs/api/stream.html

---
# Concept and Definition

```shell
ls -l | grep key | less
```

---
# Stream in Node.js
* Stream is a abstract core module in Node
* Streams were originally designed to make processing I/O in Node more manageable and efficient
* Many Node core module are implemented by stream
* By default streams only support dealing with Strings and Buffers
* All streams are instances of EventEmitter

---
# Advantage
* Streams are an important component of small-program design and unix philosophy
* Save memory

---
# Stream Types
* Readable
* Writable
* Transform
* Duplex

```javascript
read.pipe(transform).pipe(transform).pipe(write)
```

---
![stream-types](/assets/stream-types.png)

---
![stream-base](/assets/stream-base.png)

---
# Misc
* Stream can be object when set `objectMode` to be `true`
* `highWaterMark` default to be 16384(16kb)
* To disable writable stream default to end set `{end: false}`

---
# References
* [stream-handbook](https://github.com/substack/stream-handbook)
* [node-js-streams-everything-you-need-to-know](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)
* [stream-doc](https://nodejs.org/dist/latest-v8.x/docs/api/stream.html)
* [through2](https://github.com/rvagg/through2)
* [readable-stream](https://github.com/nodejs/readable-stream)
