/* 

spread operator : {}
rest parameters: function(...)
destructuring assignment: simplifies extracting data on arrays and objects into distinct variables 

*/


/* 

    Using the spread operator 

*/
let a = [20, 40, 50];
let b = [10, ...a, 70];

let c = ['Constance', 'Jobsteen', 'Creatance'];
let d = ['Suzana', 'Allison', 'Bobsteen', ...c];

// Using functions
const collect = (...e) => {
    console.log(e)
}

console.log(b);
console.log(d);
collect(1,2,3,4,5,6,7,8,9);

/* 

    Destructuring assignment

*/

let f = [1,2,3,4,5,6];
let [four, five] = f;
console.log(four, five);

let animals = ['Simba', 'Mufasa', 'Nala'];
let [lion, lionFather] = animals;
console.log(lion, lionFather);

/* 

    Destructuring with objects

*/

let king = {name: 'Mufasa', kids: 1};
let {name, kids} = king;
console.log(name, kids);

// testing setTimeout function using arrow functions
/* setTimeout(() => {
    console.log('Becoming an excceptional Javascript Developer')
}, 3000); */

// declarig a non anonymous arrow function
const cheerful = () => {
    console.log('I am always cheerful');
}

cheerful();

/* 
    Helper methods
    map => allows us create arrays by calling a specific function on each element within an initial array.
    filter

*/

// map
let values = [10, 40, 80, 30];

let double = (n) => {
    return n * 2;
}

let doubled = values.map(double);
console.log(doubled);

/* 
    another way of writing our helper map method 
    let doubled = values.map((n) => n*2);
    console.log(doubled);

*/

// filter method examples 
let points = [3,5,6,7,8,1,8];
let highscores = points.filter((n) => {
    return n > 3;
});

console.log(highscores);

/* 
    another way of writing our helper filter method 
    let highscores = points.filter((n) => n>3);
    console.log(highscores);

*/

/* 
    modules refer to re-usable pieces of code within our applications

*/

// Classes 

class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

}

let newKing = new Animal('Mufasa', 3.5);
console.log(newKing);