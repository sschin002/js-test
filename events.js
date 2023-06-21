const event = require("events");
const eventEmitter = new events.eventEmitter();

//create event handler
const myEventHandler = () => {
    console.log("I hear a screem");
}

//Assign the event handler to a event
eventEmitter.on("scream",myEventHandler);

//Fire the scream event
eventEmitter.emit('scream');