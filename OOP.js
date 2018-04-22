function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
  return obj;
}

var salva = createNewPerson('Salva');
salva.greeting();


//shortcut using constructor function

function Person(name) {
  this.name = name;
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
}

var person1 = new Person("Dean");
var person2 = new Person("Mark");


function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};


function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

function SubstitutionCipher(abc1, abc2) {
  this.encode = function(str) {
    return encodedStr = str.split('').map(function(elem) {
      return elem = abc2[abc1.indexOf(elem)];
    }).join('');
  }
  this.decode = function(str) {
    return encodedStr = str.split('').map(function(elem) {
      return elem = abc1[abc2.indexOf(elem)];
    }).join('');
  }
}

// You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

Object.prototype.hash = function(string) {
  let current = this;
  let props = string.split('.');
  while (current && props.length) {
    current = current[props.shift()];
  }
  return current;
}
