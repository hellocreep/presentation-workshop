# Dump Scripts

## We have a problem

---
![first thought](/assets/middleware-0.png)

---
![middleware](/assets/middleware-1.png)

---
# Middleware

## We have a problem

---
```js
//...    
myRes.pipe(resp);

if (!req.readable) {
  myReq.end();
} else {
  req.pipe(myReq);
}
```

---
# Stream

## We have a problem
