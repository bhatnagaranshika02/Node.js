var net =  require("net");

var client = net.connect({
       port:1234,
       host: "localhost"
},function(){
         console.log("connection established");
});