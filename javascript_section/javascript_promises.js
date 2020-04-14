// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
// #2) Run the above promise and make it console.log "success"
// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, 4000, 'Success'); 
})

promise
    .then(result => console.log(result));

//  using async
// example
async function fetchUsers(){ 
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}

fetchUsers();

