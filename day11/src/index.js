let xhr = new XMLHttpRequest()

xhr.open('GET', '/api/user', true)

xhr.onreadystatechange = function () {
  if (xhr.status === 200 && xhr.readyState === 4) {
    console.log(xhr.response)
  }
}

xhr.send()