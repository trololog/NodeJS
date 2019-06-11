var greet = require('./myGreet');

greet();

var person = {
    firstNAme:  'Diego',
    lastName: 'Morales',
    greet: function() {
        console.log('HEllo' + this.firstNAme + ' ' + this.lastName);
    }
}

person.greet();