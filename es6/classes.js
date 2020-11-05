// const person = {
//   name: 'Leo',
//   walk() {
//     console.log('walk');
//   }
// }

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('walk');
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  
  teach() {
    console.log('teach');
  }
}

const teacher = new Teacher('Leo', 'BSI');