var events = require("events");
var emitter = new events.EventEmitter();
function handler(){
    console.log("In myevent handler");
}
emitter.on("myEvent",handler);
emitter.emit("myEvent");
emitter.removeListner("myEvent",handler);
emitter.emit("myEvent");