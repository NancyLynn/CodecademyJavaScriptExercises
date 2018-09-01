//OBJECTS: ACCESSING OBJECT PROPERTIES, ADDING & EDITING PROPERTIES, METHODS, ES6, 'THIS' KEYWORD
let day = 'Wednesday';
let alarm;

let person = {
  name: 'Brad',
  age: 36,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7am',
 	sayHello() {
    return `Hello, my name is ${this.name}.`;
  },
  sayGoodbye() {
    return "Goodbye!";
  }
}

let friend = {
  name: 'Leah'
}

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

person.hobbies = ['rock climbing', 'coding'];
person.hobbies = ['politics'];

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(person.sayGoodbye());
console.log(friend.sayHello());


//GETTERS AND SETTERS
let person = {
  _name: 'Lu Xun',
  _age: 137,

set age(newAge) {
  if (typeof newAge === 'number') {
    this._age = newAge;
  } else {
    console.log(`Invalid input`)
    return 'Invalid input';
  }
},

get age() {
  console.log(`${this._name} is ${this._age} years old.`)
  return this._age;
}

}

person.age = 39;
