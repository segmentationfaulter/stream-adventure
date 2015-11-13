'use strict';
const util = require('util');
const Transform = require('stream').Transform;

util.inherits(UpperCaser, Transform);
function UpperCaser(options) {
  if(!(this instanceof UpperCaser)) {
    return new UpperCaser(options);
  }
  Transform.call(this, options);
}
UpperCaser.prototype._transform = function(chunk, encoding, done) {
  this.push(chunk.toString().toUpperCase());
  done();
}

const toUpperCase = new UpperCaser();
process.stdin.pipe(toUpperCase).pipe(process.stdout)
