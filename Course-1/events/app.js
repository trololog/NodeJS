const Emitter = require('./emitter');

const emtr = new Emitter();

emtr.on('greet', function(){
    console.log('greeter from my obj');
});

emtr.emit('greet');