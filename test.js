var util = require('util');
var gEvents1 = require('./index.js');
var gEvents2 = require('./index.js');

gEvents1.on('bla', function() { console.log('bla', arguments); });

setInterval(function() {
  
  if(!(process.pid % 2)) {
    gEvents2.emit('bla', { some: 'data' }, 'bla', 'yadda');
  } else {
    gEvents2.globalEmit('bla', { some: 'data2' });
  }
  
}, 2000);
