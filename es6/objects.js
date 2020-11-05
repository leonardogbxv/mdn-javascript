const person = {
  name: 'Leo',
  // walk: function() {},
  walk() {},
  talk() {}
}

person.talk();

//hard-coding
person.name = 'Goku';

// html input
const inputName = 'name'; 
person[inputName.value] = 'Goku';