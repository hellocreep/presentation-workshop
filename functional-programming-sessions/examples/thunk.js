const x = 5

function fn(num) {
  return num * num
}

fn(x + 5)

// call by value
'fn(10) -> 10 * 10'

// call by name
'fn(5 + 5) -> (5 + 5) * (5 + 5) -> 10 * 10'
