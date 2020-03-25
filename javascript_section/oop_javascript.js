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
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.name, 'just logged out');
    }
}

// create class instances
const userOne = new User('johndoe@gmail.com', 'John');
const userTwo = new User('great@gmail.com', 'Greatin')