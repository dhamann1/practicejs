function createNewPerson (name){
  var obj = {};
  obj.name = name;
  obj.greeting = function (){
    console.log('Hi! I\'m ' + this.name + '.');
  }
  return obj;
}

var salva = createNewPerson('Salva');
salva.greeting();


//shortcut using constructor function

function Person(name){
  this.name = name;
  this.greeting = function(){
    console.log('Hi! I\'m ' + this.name + '.');
  }
}

var person1 = new Person("Dean");
var person2 = new Person ("Mark");


function Person (first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};


function Teacher (first, last, age, gender, interests, subject){
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}
