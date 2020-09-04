var events = require("events")
var emitter = new events.EventEmitter();

emitter.on("myEvent",function() {
   console.log("Event fired");
});

emitter.emit("myEvent")