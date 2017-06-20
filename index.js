const express = require('express');
const app = express();
const api = require('./api');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/', api);

app.use('/', (req, res) => {
    res.sendfile('index.html');
})

app.listen(3030);