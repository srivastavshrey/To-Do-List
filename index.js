const express = require('express');
const { propfind } = require('./route');
const app = express();
const port = 8000; 

//setting up ejs
app.set('view engine','ejs');
app.set('views','./views');
//use express router
app.use('/',require('./route/index'));
app.listen(port, function(err){
    if(err){
        console.log(`Error!:${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
});