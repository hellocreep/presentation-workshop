function fn(doc, id) {
  return doc.getElementById(id)
}

const mockDoc = {
  getElementById() {}
}

fn(mockDoc, 'id')
