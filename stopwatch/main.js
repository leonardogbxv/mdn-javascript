const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')


//Time values
let seconds = 0
let minutes = 0
let hours = 0

//Display time values
let displaySeconds = 0
let displayMinutes = 0
let displayHours = 0

//hold setInterval()
let interval = null

//hold stopwatch status
let status = 'stopped'

//Increment time values
function stopwatch() {
  seconds++

  if(seconds / 60 === 1) {
    seconds = 0
    minutes++
    if(minutes / 60 === 1) {
      minutes = 0
      hours++
    }
  }

  if(seconds < 10) {
    displaySeconds = `0${seconds.toString()}`
  } else {
    displaySeconds = seconds
  }

  if(minutes < 10) {
    displayMinutes = `0${minutes.toString()}`
  } else {
    displayMinutes = minutes
  }

  if(hours < 10) {
    displayHours = `0${hours.toString()}`
  } else {
    displayHours = hours
  }

  //Display time values
  document.getElementById('clock').innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`
}

function buttons() {
  if(status === 'stopped') {
    interval = window.setInterval(stopwatch, 0)
    document.getElementById('buttons').innerHTML = 'Stop'
    status = 'started'
  } else {
    window.clearInterval(interval)
    document.getElementById('buttons').innerHTML = 'Start'
    status = 'stopped'
  }
}

start.onclick = function() {
  window.setInterval(stopwatch,1000)
}
// function displayTime() {
//   let date = new Date()
//   let time = date.toLocaleTimeString()
//   document.querySelector('.clock').textContent = time
// }

// displayTime()
// const createClock = setInterval(displayTime, 1000)
