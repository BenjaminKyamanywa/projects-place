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

// create class instances
const newUserOne = new User('johndoe@gmail.com', 'John');
const newUserTwo = new User('great@gmail.com', 'Greatin')

newUserOne.login();
newUserTwo.logout();

// method chaining => we add 'return this' to our methods in order to use method chaining 
newUserOne.login().updateScore().updateScore().logout();