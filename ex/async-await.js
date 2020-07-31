// "promise-test.html"

// async/await version
async function myFetch() {
  let response = await fetch('coffee.jpg')

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  } else {
    let myBlob = await response.blob()

    let objectURL = URL.createObjectURL(myBlob)
    let image = document.createElement('img')
    image.src = objectURL
    document.body.appendChild(image)
  }
}

myFetch()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message)
})

// refactored
async function myFetch() {
  let response = await fetch('coffee.jpg')
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  } else {
    return await response.blob()
  }
}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob)
  let image = document.createElement('img')
  image.src = objectURL
  document.body.appendChild(image)
}).catch(e => console.log(e))
