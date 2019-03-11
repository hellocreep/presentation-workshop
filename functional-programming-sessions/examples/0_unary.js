['1', '2', '3'].map(parseInt) // [1, NaN, NaN]

// parseInt('1', 0)
// parseInt('2', 1)
// parseInt('3', 2)

_.map(['1', '2', '3'], _.unary(parseInt));
