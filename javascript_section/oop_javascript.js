// object example 
let userOne = {
    email: 'johndoe@gmail.com',
    name: 'John',
    login(){
        console.log(this.email, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};

console.log(userOne);

// updating a property
userOne.name = 'Grace'

// creating multiple instances of an object without having to re-create an obaject using classes
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

// inheritance
class Admin extends User {
    deleteUser(user){
        // false remove user and true keep user in users array
        users = users.filter(u => {
            return u.email !=user.email;
        })
    }
}


// create class instances
const newUserOne = new User('johndoe@gmail.com', 'John');
const newUserTwo = new User('great@gmail.com', 'Greatin')
const newAdmin = new Admin('admin@gmail.com', 'administrator')

// array of users
var users = [newUserOne, newUserTwo, newAdmin];

newUserOne.login();
newUserTwo.logout();

// method chaining => we add 'return this' to our methods in order to use method chaining 
newUserOne.login().updateScore().updateScore().logout();

// using prototypes to create classes
function NewestTypeOfUser(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

// adding prototype methods to our NewestTypeOfUser object
NewestTypeOfUser.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

NewestTypeOfUser.prototype.login = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

// using inheritance for our NewestTypeOfUser object and prototype methods
// ...args captures our arguments in an array
function NewestTypeOfAdmin(...args){
    NewestTypeOfUser.apply(this, args);
    this.role = 'super admin';
}

// NewestTypeOfAdmin prototype inheriting methods from NewestTypeOfUser prototype
NewestTypeOfAdmin.prototype = Object.create(NewestTypeOfUser.prototype);

//giving admin and additional method
NewestTypeOfAdmin.prototype.deleteUser = function(u){
    // false remove user and true keep user in users array
    allOurUsers = allOurUsers.filter(user => {
        return allOurUsers.email != u.email;
    })
}

const greatNewUserOne = new NewestTypeOfUser('greeting@gmail.com', 'Swezi');
const normalNewUserTwo = new NewestTypeOfUser('gruesome@gmail.com', 'Kraster');
const superNewAdmin = new NewestTypeOfUser('shawn@gmail.com', 'shawn mendez');

allOurUsers = [greatNewUserOne, normalNewUserTwo, superNewAdmin];

console.log(greatNewUserOne);
normalNewUserTwo.login();

/* 

    OOP Principles 
    Encapsulation
    Inheritance
    Abstraction
    Polymorphism

*/

//Encapsulation oop
let employee = {
    baseSalary : 10000,
    overtime : 10,
    rate: 20,
    getWage(){
        return this.baseSalary + (this.overtime * this.rate);
    }
}

console.log(employee.getWage());

