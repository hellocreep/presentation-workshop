// Lodash
function greet(greeting, name, end) {
  return greeting + ' ' + name + ' ' + end;
}

var sayHelloToFred = _.partial(greet, 'hello', 'fred');
sayHelloToFred('!!!');
// => 'hello fred !!!'
