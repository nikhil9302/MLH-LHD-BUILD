const express = require('express');
const path = require('path');

const app = express()

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

app.use('/', express.static('public'));

module.exports = app;
// write node server application to listen on port 3000