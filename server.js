import express from 'express';


const app = app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.get('/hello', (req, res) => {
    res.send('Hello to you too!')
});

app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.send(`Current time an date: ${currentTime}`);
});

app.get('/random', (req, res) => {
    const randomNumber = Math.random();
    res.send(`Random number: ${randomNumber}`);
});

app.get('/fact', (req, res) => {
    const fact = 'JS was created in about 10 days!';
    res.send(fact);
});



