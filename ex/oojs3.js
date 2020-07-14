const input = document.querySelector('input')
const btn = document.querySelector('button')
const para = document.querySelector('p')

btn.onclick = function () {
  const code = input.value
  para.textContent = eval(code)
}

// class Person

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  }
  this.age = age
  this.gender = gender
  this.interests = interests
}

Person.prototype.bio = function () {
  let string = `${this.name.first} ${this.name.last} is ${this.age} years old. `

  let pronoun = `${this.gender === 'male' ? 'He likes ' : 'She likes '}`

  string += pronoun

  if (this.interests.length === 1) {
    string += `${this.interests[0]}.`
  } else if (this.interests.length === 2) {
    string += `${this.interests[0]} and ${this.interests[1]}.`
  } else {
    for (let i = 0; i < this.interests.length; i++) {
      if (i === this.interests.length - 1) {
        string += `and ${this.interests[i]}.`
      } else {
        string += `${this.interests[i]}, `
      }
    }
  }

  alert(string)
}

Person.prototype.greeting = function () {
  alert(`Hi! I\'m ${this.name.first}.`)
}

Person.prototype.farewell = function () {
  alert(`${this.name.first} has left the building. Bye for now!`)
}

let person1 = new Person('Artoria', 'Pendragon', 24, 'female', ['well structured meals', 'stuffed animals'])

// class Teacher 
//(inherits the attributes from 'Person')

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests)

  this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype)

Object.defineProperty(Teacher.prototype, 'constructor', { 
  value: Teacher, 
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true })

Teacher.prototype.greeting = function() {
  let prefix = ''

  if(this.gender === 'male') {
    prefix = 'Mr.'
  } else if(this.gender === 'female') {
    prefix = 'Mrs.'
  } else {
    prefix = 'Mx.'
  }

  alert(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`)
}

let teacher1 = new Teacher('Agatha', 'Christie', 85, 'female', ['crime fiction', 'books'], 'literature')

// class Student 
//(inherits the attributes from 'Person')

function Student(first, last, age, gender, interests, grade) {
  Person.call(this, first, last, age, gender, interests)

  this.grade = grade
}

Student.prototype = Object.create(Person.prototype)

Object.defineProperty(Student.prototype, 'constructor', { 
  value: Student, 
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true })

Student.prototype.greeting = function() {
  alert(`Yo! I\'m ${this.name.first} :D`)
}

let student1 = new Student('Shinji', 'Ikari', 14, 'male', ['peace', 'music'], '8th grade')