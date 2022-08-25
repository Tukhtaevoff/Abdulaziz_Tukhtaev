#### Lesson 9

### Things that I learned in Lesson 9 :

## 1. Switch case

# The switch statement is used to perform different actions based on different conditions.

For example : 
let John = 34;
switch (John) {
    case 33: 
    console.log("You are a little bit younger");
       break;
    case 34:
    console.log("You are well aged");
       break;
    case 35:
    console.log("You are a little bit older");
       break;
    default: 
       console.log("Come later"); 
}

## 2. Type coercion

# Type coercion is the automatic or implicit conversion of values from one data type to another. For example, converting a string value to an equivalent number value. It is also known as type conversion.

For example:
let num1 = "5";
let num2 = 4;
const result = num1 == num2; // true
console.log(result);
const result = num1 === num2; // false
console.log(result);

## 3. IEFE

# IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed immediately after it has been defined.

For example: 
let student = "Cavin";
(function myFunction(evt) {
   evt.preventDefault();
   console.log(student);
}) ()  -- It's called IEFE - Immediately Execute Function Expression;

## 4. Scopes

# A block scoped variable means that the variable defined within a block will not be accessible from outside the block. A block can reside inside a function, and a block scoped variable will not be available outside the block even if the block is inside a function.

{  function getElements() {
      console.log("Hello World");
   }
} // It's called Local scope 
// Another example:
function getElements() {
   const person = "Marvin";
   console.log("Hello World");
} // It's called Global scope;
console.log(person); // But we cannot console a variable in Global scope from Local scope 
// Console will show "a person is not defined";

## 5. Ternary Operator

# The ternary operator is an operator that exists in some programming languages, which takes three operands rather than the typical one or two that most operators use. It provides a way to shorten a simple if else block. For example, consider the below JavaScript code.

For example: 
let studentAge = 16;
const result = studentAge <= 16 ? "younger" : "older";

console.log(`You are a little bit ${result}`);

This Ternary Operator works like If and Switch Case;

## 6. New Operator in Js

# The new operator lets developers create an instance of a user-defined object type or one of the built-in object types that has a constructor function.

Example:
const Year = 2007;
const currentYear = new Date().getFullYear();
const result = currentYear - Year;
console.log ( ` You are ${result} +  Old `);

Another Example :
var time = new Date("January 1, 2022");
console.log(time.toUTCString());

## 7. Number method and toString()

# The Number() method converts a value to a number. If the value cannot be converted, NaN is returned.

Example :
let number = 908;
let result = number.toString();
console.log(result); // Its type is

Another example :
var number = 10;
var string = "45";
var string = Number(string);
console.log(string);

## Closure

# In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.

Example :
function greeting() {
   let message = 'Hi';

   function sayHi() {
      console.log(message);
   }

   sayHi();
}

greeting();




