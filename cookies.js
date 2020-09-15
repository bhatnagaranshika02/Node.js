var express = require('express')
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/',function(req,res){
     res.cookie('myCookie','tutorials point video tutorials');
     res.end('hi there...');
});
app.get('/remove',function(req,res){
         res.clearCookie('myCookie');
});
app.listen(1234,function(){
    console.log('Server Started...');
});