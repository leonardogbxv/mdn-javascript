const header = document.querySelector('header')
const section = document.querySelector('section')

// let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

// let request = new XMLHttpRequest()

// request.open('GET', requestURL)
// request.responseType = 'json'
// request.send()

// request.onload = function() {
//   const superHeroes = request.response
//   populateHeader(superHeroes)
//   showHeroes(superHeroes)
// }

let requestURL = 'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-760w.jpg'
let request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'text'
request.send()

request.onload = function () {
  const superHeroesText = request.response
  const superHeroes = JSON.parse(superHeroesText)
  populateHeader(superHeroes)
  showHeroes(superHeroes)
}

function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1')
  myH1.textContent = jsonObj['squadName']
  header.appendChild(myH1)

  const myPara = document.createElement('p')
  myPara.textContent = `Hometown: ${jsonObj['homeTown']} // Formed: ${jsonObj['formed']}`
  header.appendChild(myPara)
}

function showHeroes(jsonObj) {
  const heroes = jsonObj['members']

  for(let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement('article')
    const myH2 = document.createElement('h2')
    const myPara1 = document.createElement('p')
    const myPara2 = document.createElement('p')
    const myPara3 = document.createElement('p')
    const myList = document.createElement('ul')

    myH2.textContent = heroes[i].name
    myPara1.textContent = `Secret identity: ${heroes[i].secretIdentity}` 
    myPara2.textContent = `Age: ${heroes[i].age}`
    myPara3.textContent = `Superpowers:`

    let superPowers = heroes[i].powers
    for(let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li')
      listItem.textContent = superPowers[j]
      myList.appendChild(listItem)
    }

    myArticle.appendChild(myH2)
    myArticle.appendChild(myPara1)
    myArticle.appendChild(myPara2)
    myArticle.appendChild(myPara3)
    myArticle.appendChild(myList)

    section.appendChild(myArticle)
  }
}