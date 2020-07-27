//Examples:

// With a named function
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!')
}, 2000)

// With a function defined separately
function sayHi() {
  alert('Hello Mr. Universe!')
}

let myGreeting = setTimeout(sayHi, 2000)

// Passing parameters
function sayHi(who) {
  alert(`Hello ${who}!`)
}

let myGreeting = setTimeout(sayHi, 2000, 'Ikari Shinji')

// Clearing timeouts
clearTimeout(myGreeting)