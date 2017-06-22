const express = require('express');
const app = express();
const api = require('./api');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const uuidv1 = require('uuid/v1');
const cookieParser = require('cookie-parser');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/', function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.userName;
  if (cookie == undefined)
  {
    // no: set a new cookie
    var randomNumber=uuidv1();
    res.cookie('userName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } 
  else
  {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});


app.use('/api/', api);

app.use('/', (req, res) => {
    res.sendfile('index.html');
})

app.listen(3030);