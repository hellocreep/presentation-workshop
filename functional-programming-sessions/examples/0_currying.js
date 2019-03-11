// Ramda.js
const users = [{name: 'chet', age:25}, {name:'joe', age:24}]
function sortByName(user) {
  return R.sortBy(R.prop('age'))(user) // sort user by the age property
}
R.compose(
  R.join(', '),            // join the names with a comma
  R.map(R.prop('name')),   // get each name property
  sortByName
)(users)
// => "joe, chet"
