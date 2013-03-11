var util = require('util');
var GEvents1 = require('./gevents.js');
var GEvents2 = require('./gevents.js');

GEvents1.on('bla', function() { console.log('bla', arguments); });

setInterval(function() {

        if(!(process.pid % 2)) {
            GEvents2.emit('bla', { some: 'data' }, 'bla', 'yadda');
        } else {
            GEvents2.globalEmit('bla', { some: 'data2' });
        }

    }, 2000);