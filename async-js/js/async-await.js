const bands = [
  {name: 'Foo Fighters'},
  {name: 'ONE OK ROCK'}
]

const bandList = document.getElementById('bandlist')

const getBands = () => {
  setTimeout(() => {
    let output = ''
    bands.forEach((item, idx) => {
      output += `<li>${item.name}</li>`
    })

    bandList.innerHTML = output

  }, 1000)
}

const addBand = (name) => {
  // promise
  const callback = (resolve, reject) => {
    setTimeout(() => {
      bands.push({name})

      resolve({name})
      //reject('Unable to add..')
    }, 2000)
  }

  return new Promise(callback)
}

const runAsyncMethods = async() => {
  try{
    await addBand('Angra')
    await addBand('Wagakki Band')
    getBands()
  } catch(error) {
    console.error(error)
  }
}

runAsyncMethods()