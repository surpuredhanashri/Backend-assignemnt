var events = require("events");
var eventEmitter = new events.EventEmitter();

var listerner1 = function listener1() {
  console.log("Listern1 is excecuted...");
};

var listerner2 = function listener1() {
  console.log("Listern2 is excecuted...");
};

eventEmitter.on("myevent", listerner1);
eventEmitter.on("myevent", listerner2);

eventEmitter.emit("myevent");

console.log(eventEmitter.eventNames());

console.log(eventEmitter.listenerCount("myevent"));

console.log(eventEmitter.removeListener("myevent",listerner1))

console.log(eventEmitter.listenerCount("myevent"));
