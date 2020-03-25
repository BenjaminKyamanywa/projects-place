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

// for each loop
todos.forEach(function(todo, i){
    console.log(todo, i);
})

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

// Improving facebook app Version_2

// Soln =============================================
var database = [
    {
        username: "kyam",
        password: "secret"
    },
    {
        username: "grace",
        password: "123"
    },
    {
        username: "wilber",
        password: "321"
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

function isUserValid (username, password) {
    for(var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        } 
    }
    return false;
}
function signIn (username, password){
    if (isUserValid(username, password)){
        console.log(newsFeed);
    }else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);

// ================================================

// arrow functions

function add(a, b) {
    return a + b;
}

const add2 = (c, d) => c + d;

console.log(add(3,5));
console.log(add2(8, 6));

// Advanced functions es6 in javascript
// understanding scope
const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc();

// closures 
// a function ran. the function executed. It's never going to be executed again. But it's going to remember that there are references to those variables so the child scope always has access to the parent scope.

// currying 
// taking a function that accepts multiple arguments to accepting one at a time.

const multiply = (a, b) => a + b;
const curriedMultiply = (a) => (b) => a + b;
curriedMultiply(3)(4);

// compose 
// act of putting two functions together to form a third function where the output of one function is the input of the other.

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5);