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

      resolve()
    }, 2000)
  }

  return new Promise(callback)
}

addBand('Angra')
  .then(getBands)
  .finally(() => {
    console.log('All bands added!')
  })




// const callback = (resolve, reject) => {
//   //...
//   const error = `Ninguem acertouu!`
//   const result = false
  
//   if(error) {
//     reject(error)
//   } else {
//     resolve(result)
//   }
// }

// const p = new Promise(callback)

// p.then(console.log).catch(console.error).finally(() => {
//   console.log('Done')
// })