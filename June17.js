// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let sum = age1*age1+age2*age2+age3*age3+age4*age4+age5*age5+age6*age6+age7*age7+age8*age8;
  let sq = Math.sqrt(sum);
  return Math.floor(sq/2);
}

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

function addAny(n) {
  return function (m) {
    return n+m;
  }
}

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(n){
    return n % 2 === 0;
  });
}

const getEvenNumbers = numbersArray => numbersArray.filter(n => n % 2 === 0);


// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

function cookingTime (eggs) {
  return 5 * Math.ceil(eggs / 8);
}

const cookingTime = eggs => 5 * Math.ceil(eggs/8);

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

function min(arr, toReturn) {
  let val = Math.min.apply(null, arr)
  return toReturn == 'value' ? val : arr.indexOf(val)
}


// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

function capMe(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
}

const capMe = names => names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());

//Different Method
function capMe(names) {
  return names.map(capitalize)
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}


// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

var greet = function(name) {
  name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return 'Hello ' + name +"!";

};

// Create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

var Animal = function(name, type) {
  this.name = name;
  this.type = type;
}
Animal.prototype.toString = function() {
  return this.name + ' is a ' + this.type;
}

// Write a program that outputs the top n elements from a list.

function largest(n,xs){
  return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}

const largest = (n,xs) => xs.sort((a,b) => a - b).slice(xs.length-n);
// Complete the solution so that it returns the number of times the search_text is found within the full_text.

function substringSearch(fullText, searchText){
  return fullText.split(searchText).length - 1;
}



// Santa needs you to write two functions, getNiceNames and getNaughtyNames. Both of the functions accept an array of objects. getNiceNames returns an array containing only the names of the nice people, and getNaughtyNames returns an array containing only the names of the naughty people. Return an empty array [] if the result from either of the functions contains no names.

function getName(person) {
  return person.name;
}

function wasNice(person) {
  return person.wasNice;
}

function wasNaughty(person) {
  return !wasNice(person);
}

function getNiceNames(people){
  return people.filter(wasNice).map(getName);
}

function getNaughtyNames(people){
  return people.filter(wasNaughty).map(getName);
}


// Given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

function findEmployeesRole(name) {
  for(var i = 0; i < employees.length; i++)
    if(name === employees[i].firstName + " " + employees[i].lastName) return employees[i].role;
  return "Does not work here!";
}


// Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.

function pluck(objs, name) {
  return objs.map((obj) => obj[name]);
}

const pluck = (objs, name) => objs.map(obj => obj[name]);

// Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:
// var ninja = new Warrior('Ninja');
// var samurai = new Warrior('Samurai');
// samurai.strike(ninja, 3);
// // ninja.health should == 70

var Warrior = function(name){
  this.name = name;
  this.health = 100;
}

Warrior.prototype.strike = function(enemy, swings){
  enemy.health = Math.max(0, enemy.health - (swings * 10));
}
