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

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

// Soln using function declaration
function checkDriverAge(){
    var age = prompt("how old are you?");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) <= 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Powering On. Enjoy the ride!");
    }
}

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

// Soln using function expression
var checkDriverAge2 = function (){
    var age = prompt("how old are you?");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) <= 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Powering On. Enjoy the ride!");
    }
}
//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// it returns "Powering On. Enjoy the ride!"

// Soln 
function checkDriverAge(age){
    if (Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else {
        return "Powering On. Enjoy the ride!";
    }
}

checkDriverAge(92);

/* 
Datastructure => A way to organise things.
> Arrays
> Objects
*/

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
Soln => array.shift();

// 2. Sort the array in order.
Soln => array.sort();

// 3. Put "Kiwi" at the end of the array.
Soln => array.push("Kiwi");

// 4. Remove "Apples" from the array.
Soln => array.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]
Soln => array.reverse();

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
Soln => array2[1][1];

// Create an object and an array which we will use in our facebook exercise. 
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// Soln
var database = [
    {
        username: "kyam",
        password: "secret"
    }
];

var newsFeed = [
    {
        username: "Bruno",
        timeline: "So syked about learning javascript"
    },
    {
        username: "Gracy",
        timeline: "I love Javascript so much."
    }

];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn (username, password){
    if (username === database[0].username && database[0].password){
        console.log(newsFeed);
    }else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);

/* 
---------------------------------------
Key learnings to remember
---------------------------------------
*/

// function declaration
function newFunction (){

}

// function expression
var newFunction = function (){

};

// expression
1+3;
var a =2; 
return true;

// calling or invoking a function
alert();
newFunction(param1, param2);

// assign a variable
var a = true;

// function vs method
function thisIsAFunction(){

}

var obj = {
    thisIsAMethod: function (){

    }
}

thisIsAFunction();
obj.thisIsAMethod();

/* Loops */
