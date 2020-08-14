const greet = require('../greet');

let assert = require("assert");

describe('The greetfunction', function(){

    it('should greet Lulama correctly', function(){
        assert.equal('Hello, Lulama', greet('Lulama'));
    });

    it('should greet Sikho correctly', function(){
        assert.equal('Hello, Sikho', greet('Sikho'));
    });
});