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