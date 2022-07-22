// Events Module
// addEventListener('click', (e) => { //for frontend

// })
/*
const EventEmitter = require('events'); //type of a class import
const emitter = new EventEmitter();

emitter.on('event1', () => {
    console.log("Event 1 called");
});

emitter.on('event2', (e) => {
    console.log("Event 2 called", e);
});

emitter.emit('event1');
emitter.emit('event2', {name: "pr sarkar"});
*/

//Events & Inheriting EventEmmiter Class

const MyEvent = require('./myEvent');
const myEvent = new MyEvent();

myEvent.on('event1', () => {
    console.log("Event 1 triggered!");
})

myEvent.function1();