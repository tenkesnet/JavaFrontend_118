// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
 console.log('connection successful.');

 // Fire the data_received event
 eventEmitter.emit('fogadd');
}
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_received event with the anonymous function
const data_receiver = function(){
 console.log('data received successfully.');
}
const data_receiver2 = function(){
 console.log('data received2 successfully.');
}
eventEmitter.on('fogadd', data_receiver);
eventEmitter.on('fogadd', data_receiver2);
eventEmitter.on('fogadd', function(){
 console.log('Hello World!');
});


// Fire the connection event
eventEmitter.emit('connection');

console.log("Listener count: ", eventEmitter.listenerCount('fogadd'));  

eventEmitter.removeListener('fogadd', data_receiver2); 


console.log("**********************************************");

eventEmitter.emit('connection');

console.log("Listener count: ", eventEmitter.listenerCount('fogadd'));  