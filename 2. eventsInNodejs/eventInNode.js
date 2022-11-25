// https://nodejs.org/docs/latest-v17.x/api/events.html#events

// The events module is used to handle events in Node.js.
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('TingTong', () => {
  console.log('Who is there?');
  setTimeout(() => {
    console.log('**OPENS DOOR** \n Oh, it is you!');
}); });

//Bell Event is emitted
myEmitter.emit('TingTong');
console.log('waiting for the door to open...');