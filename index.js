var util = require('util');
var events = require('events');
var redis = require('redis');

var redisPub = redis.createClient();
var redisSub = redis.createClient();

var GEvents = function(globalPrefix) {
  events.EventEmitter.call(this);
  
  this.globalPrefix = globalPrefix || 'gevents_';
  this.setMaxListeners(100);
  var self = this;
  redisSub.on('pmessage', function(channelPattern, channel, message) {
    channel = channel.substr(self.globalPrefix.length);
    self.emit(channel, message);
  });
  redisSub.psubscribe(this.globalPrefix+'*');
};
util.inherits(GEvents, events.EventEmitter);

GEvents.prototype.globalEmit = function() {
  if(arguments.length === 0) {
    return false;
  } else {
    var channel = this.globalPrefix + arguments[0];
    delete arguments[0];
    redisPub.publish(channel, JSON.stringify(arguments));
  }
};

module.exports = new GEvents();
