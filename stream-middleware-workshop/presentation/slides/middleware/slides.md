# Middleware Workshop

---
# Preparation
* npm i
* use node ^7.10.1
* git checkout -b middleware origin/middleware

---
# Concept and Definition

Middleware is computer software that connects software components and applications.

---
# Middleware in Node.js

* Base on framework like `connect`
* Middlewares are functions executed in the middle after the input/source then modify or produces an output.
* Middleware is a function that accept `request` `response` and `next` as the parameters
* Middlewares execute in sequence

---
# Advantage

* Seperate functionality into small pieces
* Pre-handle or precheck data

---
# References
* [connect](https://github.com/senchalabs/connect)
* [express](https://expressjs.com/)
* [koa](http://koajs.com/)
