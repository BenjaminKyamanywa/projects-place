// loops in javaascript
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

// for loop
for ( var i = 0; i < todos.length; i++) {
    console.log(" I have too" + " " +  todos[i] + "!") ;
}

// while loop
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

// do while loop
var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
}while (counterTwo > 0);