const express = require('express');
const app = express();
const autocannon = require('autocannon');
const isPrime = require('./utils/is-prime');
const test = require('./utils/autocannon');
const PORT = 3010;


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});

app.get('/test', (req, res) => {
    const primes = []
    const max = Number(req.query.max) || 200
    for (let i = 1; i <= max; i++) {
        if (isPrime(i)) primes.push(i)
    }
    res.json(primes)
});


app.get('/run', (req,res) => {
    test('/test');
});



