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
 --------- Output of for loop ------------

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
--------- Output of for in loop ------------

"Boarded John Smith"
"Boarded Alexander Smolder"
"Boarded William Johnson"

*/

// for of loop
const newPassengers = [
    {
      name : "Claire Violet",
      ticket : 9085
    },
    {
      name : "Suzan Oslo",
      ticket : 3829
    },
    {
      name : "Juliet Amarova",
      ticket : 3284
    },
    {
      name : "Gracey Thiador",
      ticket : 2849
    },
    {
      name : "Clementey Hallie",
      ticket : 4902
    },
    {
      name : "Inviolet Searscon",
      ticket : 3829
    },
    {
      name : "Racheal Searson",
      ticket : 3848
    }
  ]
  
  for (let passenger of newPassengers){
    console.log("Boarding " + passenger.name + " with ticket number " + passenger.ticket + " aboard Future airways.");
  }

  /* 
--------- Output of for of loop ------------

"Boarding Claire Violet with ticket number 9085 aboard Future airways."
"Boarding Suzan Oslo with ticket number 3829 aboard Future airways."
"Boarding Juliet Amarova with ticket number 3284 aboard Future airways."
"Boarding Gracey Thiador with ticket number 2849 aboard Future airways."
"Boarding Clementey Hallie with ticket number 4902 aboard Future airways."
"Boarding Inviolet Searscon with ticket number 3829 aboard Future airways."
"Boarding Racheal Searson with ticket number 3848 aboard Future airways."

*/

// while loop
let seatsLeft = 10;
let passengersStillToBoard = 6;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0){
  passengersBoarded++;
  seatsLeft--;
  passengersStillToBoard--;
}

console.log(passengersBoarded + " passengers successfully on board");

  /* 
--------- Output of while loop ------------

"6 passengers successfully on board"

*/

