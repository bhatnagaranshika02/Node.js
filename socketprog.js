var net = require("net");
var server = net.createServer(function(socket){
    socket.end("hellooo and goodbye");
});
  server.listen(1234);