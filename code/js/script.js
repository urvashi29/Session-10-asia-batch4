//let
//is used to declare a variable with a block scope

var x = 20;

{
  let x = 10;
  x = 50;
  console.log(x); //10
}

console.log(x); //20

//can't redeclare a variable with the same name
// let x = 20;//give error
// x = 90;

//hoisting not working with let (it goes in temporal dead zone)
// y = 10; //initialize
// console.log(y); //use the variable

// let y; //declared

//const
var name = "alex";
{
  const name = "alina";
  //   name = 'harry';//can't redefine the value
  console.log(name);
}

console.log(name);

// const keyword define constant reference, not value
// with non-primitive datatype
const arr = [90, 89, 200];
arr[0] = 100;
console.log(arr);
// arr = [90, 200, 199];//give error

//can't redeclare a variable with the same name
// const x = 20;//give error
// x = 90;

//hoisting doesn't work with const ((it goes in temporal dead zone))
// y = 10; //initialize
// console.log(y); //use the variable

// const y; //declared

//arrow function/fat arrow : shorter function syntax
// syntax, return , this
function add() {
  console.log(this); //window
  return 10 + 20;
}

console.log(add());

addDisplay = () => 10 + 90;

console.log(addDisplay());

let obj = {
  fullName: function () {
    console.log(this); //obj
  },
  full: () => {
    console.log(this); //window
  },
};

//array helper function (map, filter, forEach)

//map: returns an array. It iterates over array elements
const num = [90, 100, 400, 30, 2];
const numResult = num.map((ele, i, arr) => ele * 2);
console.log(numResult);

//filter
//return an array filled with all the elments that pass the test
const filterArray = num.filter((ele) => ele >= 18);
console.log(filterArray);

//forEach
//is used to iterate over array elements
num.forEach((ele) => {
  console.log(ele * 2);
});

//find
//return the first element that pass the test
const findResult = num.find((ele) => ele >= 100);
console.log("find", findResult);

//some
//return the boolean value
const someResult = num.some((ele) => ele >= 400);
console.log(someResult);

//every
const everyResult = num.every((ele) => ele >= 400);
console.log(everyResult);

//class
//template of js object
class Univeristy {
  count = 0;

  constructor(name, id, department) {
    //this is referring to University
    this.name = name;
    this.id = id;
    this.dept = department;
  }
}

const studentOne = new Univeristy("alina", 1, "ece");
console.log(studentOne);

const studentTwo = new Univeristy("alex", 2, "cse");
console.log(studentTwo);

//inheritance
//parent class
class Shape {
  constructor(id) {
    this.id = id;
  }
}

//child/derived
class Circle extends Shape {
  constructor(id, radius) {
    super(id); //call the parent class constructor
    this.radius = radius;
  }
}

const c = new Circle(1, 4);
console.log(c);

//object literal enhancement
const fName = "alina";
const lName = "joe";
const age = 20;

//restructuring of object
//property shorthand
const person = { fName, lName, age };
console.log(person);

//destructuring of object
const user = {
  id: 40,
  isVerified: true,
};

const { id, isVerified } = user;

//spread operator (...)
//for objects
const personOne = {
  A: 20,
  B: 30,
};

//shallow copy
// const personTwo = personOne;
// personTwo.A = 90;
// console.log(personOne, personTwo);

//using spread opeartor (deep copy)

const personTwo = { ...personOne, Z: 60 };
personTwo.A = 90;
console.log(personOne, personTwo);

//for arrays
let one = [90, 29, 100];
let two = [820, 39, 399];
let third = [...one, ...two, 100, 300];
console.log(third);

//destrcuring of array
const [a, , b] = one;
console.log(a, b);

//template strings (``)
let firstName = `alex`;
let lastName = `joe`;

console.log("My name is " + firstName + " " + lastName);

// using tenplate strings
console.log(`My name is ${firstName} ${lastName}`);

//for...in for objects
for (x in person) {
  console.log(x);
  console.log(person[x]);
}
