/*
Javascript Types

1. Number
2. String
3. Boolean
4. Undefined
5. Null 
6. Symbol (ES6)
7. Object  
*/

/* 
Javascript Comparisons

===
!==
>
<
<=
>=

*/

/* 
Javascript variables

var
let 
const

*/

// Guess what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Once you have an answer  to the questions then 
// check them by copying them and running it in the console yourself line by line 


//Evaluate the below:
5 + "34"
Soln => 534;
5 - "4"
Soln => 1;
10 % 5
Soln => 0;
5 % 10
Soln => 5;
"Java" + "Script"
Soln => "Javascript";
" " + " "
Soln => " ";
" " + 0
Soln => " 0";
true + true
Soln => 2;
true + false
Soln => 1;
false + true
Soln => 1;
false - true
Soln => -1;
3 - 4
Soln => -1;
"Bob" - "bill"
Soln => NaN;

//Evaluate the below comparisons:
5 >= 1
Soln => true;
0 === 1
Soln => false;
4 <= 1
Soln => false;
1 != 1
Soln => false;
"A" > "B"
Soln => false
"B" < "C"
Soln => true;
"a" > "A"
Soln => true;
"b" < "A"
Soln => false;
true === false
Soln => false;
true != true
Soln => false;

// Make the string: "Hi There! It's "sunny" out" by using the + sign:
Soln => "Hi There! It\'s " + "\"sunny\"" + " out";

/* 
First simple calculator program that can be run in browser console

var first = prompt("enter first number");
var second = prompt("enter second number");
var sum = Number(first) + Number(second);
alert("The sum is: " + sum);

*/

// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 


// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "John";
var lastName = "Doe";

// create a variable that holds the answer // of "firstName" + " " + "lastName"
var fullName = firstName + " " + lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?
Soln => 23;
// What is c equal to?
var c;
Soln => undefined;

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

// Soln
var firstNumber = prompt("enter first number");
var secondNumber = prompt("enter second number");
var sum = Number(first) + Number(second);
alert("The sum is: " + sum);

// BONUS: Make a program that can subtract, multiply, and also divide!
var firstNumber = prompt("enter first number");
var secondNumber = prompt("enter second number");
var sum = Number(firstNumber) + Number(secondNumber);
var subtract = Number(firstNumber) - Number(secondNumber);
var multiply = Number(firstNumber) * Number(secondNumber);
var divide = Number(firstNumber) / Number(secondNumber);
alert("The sum is: " + sum + "\nThe subtraction is: " + subtract + "\nThe multiplication is: " + multiply + "\nThe division is: " + divide);

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

// Soln
var age = prompt("how old are you?");
if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) <= 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering On. Enjoy the ride!");
}

