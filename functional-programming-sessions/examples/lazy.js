const res = Lazy(people)
  .pluck('lastName')
  .filter(function(name) { return name.startsWith('Smith'); })
  .take(5)

res.each(function() {})

res.toArray()

// [] -> []
