const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;

const app = express();

app.use(bodyParser.json());

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '123',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send('Welcome to Facerecognition API')
})

app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json('successfull signin!')
        } else {
            res.status(400).json('error logging in!')
        }
    
})



app.listen(PORT, () => {
    console.log(`Face Recognition app is listening on port ${PORT}`)
});

/* 
     Server Plan
     - res = this is working home route
     - /signin -> POST = success/fail
     - /register -> POST = user
     - /profile/:userid -> GET = user
     - /image -> PUT -> user

*/