const events = require('events');
const eventEmitter = new events.EventEmitter(); //create a object

function listener(code, msg) {
   console.log(`status ${code} and ${msg}`);
}
eventEmitter.on("not-found",listener)
eventEmitter.on('status', listener); 
eventEmitter.emit('status', 200, 'ok');
eventEmitter.emit("not-found",404,'ok')

// note :- first write a listener then broadcast the events