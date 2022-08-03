const express = require("express");
const path = require("path");
const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/963ca8233ac24f79ba69544765fcc9bf' // Your RCP URL goes here
const web3 = new Web3(rpcURL)

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

// serving the index.html file 

const server = app.listen(process.env.PORT || 5000)
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number