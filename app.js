
const {sum} = require('./helpers');

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send("hey Whatsup!!! from node server new");

});
app.listen(3000);

/*const http = require('http'); //no need to give path for 

const server = http.createServer((req, res) =>{
    res.end("Hello World from nodejs updated")

})
server.listen(3000);*/

