const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

/* Looping through images */

for(i = 1; i <= 5; ++i) {
  const newImage = document.createElement('img')
  newImage.setAttribute('src', `images/pic${i}.jpg`)
  thumbBar.appendChild(newImage)

  newImage.onclick = function () {
    let img = newImage.getAttribute('src')
    displayedImage.setAttribute('src', img)
  }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function () {
  let btnClass = btn.getAttribute('class')
  switch(btnClass) {
    case 'dark':
      btn.setAttribute('class', 'light')
      btn.textContent = 'Lighten'
      overlay.style.backgroundColor = 'rgb(' + [0,0,0,0.5].join(',') + ')'
      break
    default:
      btn.setAttribute('class', 'dark')
      btn.textContent = 'Darken'
      overlay.style.backgroundColor = 'rgb(' + [0,0,0,0].join(',') + ')'
  }
}
