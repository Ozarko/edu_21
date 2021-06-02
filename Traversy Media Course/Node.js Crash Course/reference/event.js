const EventEmmiter = require('events')

class MyEmmiter extends EventEmmiter {}

// Init object

const myEmmiter = new MyEmmiter()

// Event Listener

myEmmiter.on('event',()=> console.log('Event Fired'))

// Init event

myEmmiter.emit('event')

