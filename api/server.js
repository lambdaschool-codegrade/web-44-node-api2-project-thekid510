// implement your server here
// require your posts router and connect it here
const express = require('express');

const server = express();

// server.use(express.json());
server.get('/',(req, res, )=> {
    res.send(`
    <h2>Post API</h2>
    <p>Welcome to the web 44 is da best!!!</p>
    ` );
});
module.exports = server;