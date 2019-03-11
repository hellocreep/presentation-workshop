function getHTML(id) {
  return function() {
    var el = document.getElementById(id)
    return el.innerHTML
  }
}
