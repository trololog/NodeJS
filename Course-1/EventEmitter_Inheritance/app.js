const EventEmitter = require('events');
const Util = require('util');

/** Using ES6 Classes **/
class Greetr extends EventEmitter {
    constructor() {
        super()
        this.greeting = 'My greet';    
    }

    greet(data) {
        console.log(this.greeting);
        this.emit('greet', data);
    }
}



/*function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'My greet';
}

Util.inherits(Greetr, EventEmitter); //All Greetr objects will have access to EventEmitter methods through inheritance

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

let greet1 = new Greetr();

greet1.on('greet', function() {
    console.log('Event greet called');
});

greet1.greet();*/