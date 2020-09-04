var events = require("events")
var emitter = new events.EventEmitter();

var username = "nodejs";
var password = "anshika02";

emitter.on ("userAdded",function(username , password){
            console.log("New User  " + username);

});
emitter.emit("userAdded",username, password);
