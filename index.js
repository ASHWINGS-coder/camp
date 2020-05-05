// requiring dependecies
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const db = require('./config/mongoose')

// setting up view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded());
app.use(cookieParser());

// routing action
app.use('/',require('./router/index'));

// listening to server
app.listen(3000,(err) => {
    if(err){
        console.log('Error in running server');
    }
    console.log('Server is running on port 3000');

})