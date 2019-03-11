_([1, 2, 3])
 .tap(function(array) {
// Mutate input array.
   array.pop();
 })
 .reverse()
 .value();
// => [2, 1]
