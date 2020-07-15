const input = document.querySelector('input')
const btn = document.querySelector('button')
const para = document.querySelector('p')

btn.onclick = function () {
  const code = input.value
  para.textContent = eval(code)
}

// class Person

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
  }

  greeting() {
    alert(`Hi! I\'m ${this.name.first}.`)
  }

  farewell() {
    alert(`${this.name.first} has left the building. Bye for now!`)
  }
}

let artoria = new Person('Artoria', 'Pendragon', 24, 'female', ['well structured meals', 'stuffed animals'])

// class Teacher 
//(inherits the attributes from 'Person')

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests)

    this.subject = subject
  }

  get subject() {
    return this._subject
  }

  set subject(newSubject) {
    this._subject = newSubject
  }
}

let agatha = new Teacher('Agatha', 'Christie', 85, 'female', ['crime fiction', 'books'], 'Literature')

// class Student 
//(inherits the attributes from 'Person')

class Student extends Person {
  constructor(first, last, age, gender, interests, grade) {
    super(first, last, age, gender, interests)

    this.grade = grade
  }
}

let shinji = new Student('Shinji', 'Ikari', 14, 'male', ['peace', 'music'], '8th grade')


console.log(agatha.subject)

agatha.subject = "Criminology "

console.log(agatha.subject)