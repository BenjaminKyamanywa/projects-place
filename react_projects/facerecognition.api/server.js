const express = require('express');
const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
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