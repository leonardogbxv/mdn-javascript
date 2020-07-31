// bands array
const bands = [
  {name: 'Foo Fighters'},
  {name: 'ONE OK ROCK'}
]

// html ul reference
const bandList = document.getElementById('bandlist')

// loop to add bands to the bandList
const getBands = () => {
  setTimeout(() => {
    let output = ''
    bands.forEach((item, idx) => {
      output += `<li>${item.name}</li>`
    })

    bandList.innerHTML = output

  }, 1000)
}

// add new band to the bandList
const addBand = (name, callback) => {
  setTimeout(() => {
    bands.push({name})

    callback()
  }, 2000)
}

addBand('Angra', getBands)