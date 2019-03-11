function greet(greeting, name, end) {
  return greeting + ' ' + name + ' ' + end;
}

var sayHelloToFred = greet.bind(null, 'hello', 'fred');
sayHelloToFred('!!!');
// => 'hello fred !!!'
