// Declaring variables
// Here, we declare (create) and initialize (give a value to) two variables:  numberOfCats and  numberOfDogs
let numberOfCats = 2;
let numberOfDogs = 4;

numberOfCats = 3;

console.log("Number of Cats: " + numberOfCats);

let totalCDs = 60;
let totalVinyls = 50;

let totalMusic = totalCDs + totalVinyls;

console.log("Total Music Records: " + totalMusic);

// storing data with data types
// What is a primitive type?
// Primitive types are the basic building blocks of every data structure in JavaScript

// Classes
class Book {
  constructor(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// Instances of our class
let myBook = new Book("Guesser", "John Doe", 345);
let myNewBook = new Book("Moved On", "Deus", 564);
console.log(myBook);
console.log(myNewBook);


let numberOfCanines = 10;

numberOfCanines += 5;
numberOfCanines /= 3;
numberOfCanines++;
console.log(numberOfCanines);

// loops 

// normal for loop
// when the order for the looping does not matter
const numberOfPassengers = 5;

for (i = 0; i < numberOfPassengers; i++){
  console.log("New Passengers boarded")
}

/* 
 --------- Output ------------

"New Passengers boarded"
"New Passengers boarded"
"New Passengers boarded"
"New Passengers boarded"
"New Passengers boarded"

 */

// for in loop
// when you want to repeat the loop in an order ie with an array
const passengers = [
  "John Smith",
  "Alexander Smolder",
  "William Johnson"
]

for (let i in passengers){
  console.log("Boarded " + passengers[i]);
}

/* 
--------- Output ------------

"Boarded John Smith"
"Boarded Alexander Smolder"
"Boarded William Johnson"

*/

