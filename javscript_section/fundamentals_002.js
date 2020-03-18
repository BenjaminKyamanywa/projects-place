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

// Soln
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