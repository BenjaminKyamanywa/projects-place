// obaject 
const userOne = {
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