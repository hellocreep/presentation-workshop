const operate = (x, y) => square(addOne(multiply(x, y)))

const operateCompose = R.compose(
  square,
  addOne,
  multiply
)

const operatePipe = R.pipe(
  multiply,
  addOne,
  square
)
