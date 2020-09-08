const express = require('express');
const port = 9000;
const app = express();
const cors = require('cors');
const db = require('./config/mongoose');
const jwtStratery = require('./config/jwt-strategy');

app.use('./public',express.static(__dirname +'./public'));

app.use(express.urlencoded());
app.use(cors());
app.use('/',require('./routers/index'));


app.listen(port,function(error){
    if(error){
        console.log('error in server');
    }else{
        console.log('server is running on port:',port);
    }

});