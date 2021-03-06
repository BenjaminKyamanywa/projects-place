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
    hello(){
        console.log(`Hi! I'm ${this.name} from the Animal Kingdom`);
    }
}

// inheritance of Animal class
class Lion extends Animal {
    constructor(name, height, color){
        super(name, height);
        this.color = color;
    }
    hello(){
        console.log(`Hi! I'm ${this.name} from Pride Rock!`);
    }
}

let son = new Lion('Simba', 4, 'Golden');
console.log(son);
son.hello();

let newKing = new Animal('Mufasa', 3.5);
console.log(newKing);
newKing.hello();

// static methods in classes => can be used without declaring an instance of a class
class Calculator {
    static multiply(a, b){
        return a * b;
    }
    static add(c, d){
        return c + d;
    }
}

let firstMultiplication = Calculator.multiply(4, 6);
let secondAddition = Calculator.add(4, 2);
console.log(firstMultiplication);
console.log(secondAddition);

// prototypes
function Shinigami(name, rank, zanpakuto){
    this.name = name;
    this.rank = rank;
    this.zanpakuto = zanpakuto;
    this.greeting = () => `I'm ${this.name} and ${this.zanpakuto} is my sword.`
}

// adding a property and method to a prototype
Shinigami.prototype.squad;

Shinigami.prototype.inform = function(){
    return `I ${this.name} named my sword ${this.zanpakuto} and we belong to ${this.squad}.`
}

let hitsugaya = new Shinigami('Hitsugaya Toushiro', 'Captain', 'Hyorinmaru');
hitsugaya.squad = 'Greats';
console.log(hitsugaya.greeting());
console.log(hitsugaya.inform());

/* 
    Datastructures => Programmatic storage of data for efficient usage.

*/

// Set datastructure
let j = new Set();
j.add(4);
j.add('New Age');
j.add({ x: 4, y: 10});
console.log(j);
console.log(j.size);

// Promises 
let p = new Promise((resolve, reject) => {
    resolve('Resolved promise data')
    // reject('Failed to resolve promise data')
})

p.then(response => console.log(response))
 .catch(error => console.log(error));


// HTTP defines a foundation for how data communicates over the internet.

/* 
    Defining how to use fetch 

    const root = 'http://jsonplaceholder.typicode.com/posts/1';

    fetch(root, {method: 'GET'})
        .then(response => json())
        .then(json => console.log(json));

    ***Consuming data from a more dynamic API

    const root1 = 'https://www.googapis.com/books/v1/volumes?q=isbn:0747532699'

    fetch(root1, {method: 'GET'})
        .then(response => json())
        .then(json => console.log(json));
*/

// async function
async function async_one(){
    return 'This is the first successful async response function';
}

async function async_two(){
    throw new Error ('This is an error from async function');
}

// async_one().then(response => console.log(response));
// async_two().catch(error => console.log(error)); => works and fills the console with the async error

// async with await
async function async_three(){
    return 'This is the second successful async response function';
}

async function async_four(){
    const one = await async_one();
    console.log(one);
    const two = await async_three();
    console.log(two);
}

// function call
async_four();

// using promise all with await


async function async_five(){
    const [res_one, res_two] = await Promise.all(
        [async_one(), async_three()]
    )
    console.log(res_one, res_two);
}

// function call
async_five();