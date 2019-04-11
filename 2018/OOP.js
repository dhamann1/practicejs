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

// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.
//
// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:
//
// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.

function splitTheBill(x) {
  let sum = 0;
  let groupNum = 0;
  let fairAmount = 0;
  let newObj = {};
  for (key in x) {
    groupNum++;
    sum += x[key];
  }
  fairAmount = sum / groupNum;
  for (item in x) {
    newObj[item] = Math.round((x[item] - fairAmount) * 100) / 100;
  }
  return newObj;
}









function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};


var teacher = new Person("Dean", "Hamann", 27, "Male", "Swimming");

console.log(teacher._proto_);
