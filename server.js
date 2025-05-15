const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
    myEmitter.emit("log", "Log event emitted.");
    myEmitter.emit("log", "A new log event emitted.");
}, 2000);
