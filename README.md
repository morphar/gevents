# gevents

Extends the native node.js events with a global emitter through [Redis](http://redis.io).

The single purpose is to add the ability to emit an event, that is transported through [Redis](http://redis.io), making the event "global" to all processes and computers, that are listening with gevents on the same [Redis](http://redis.io) setup.

### This is an early BETA version

As soon as the module has shown it's worth and stability on a live system, it will be marked as version >= 1.0.0.

Until then: Feel free to play around with it, learn from it.

### To install

	npm install gevents

### Todo
Add an options argument that can contain connection info etc.