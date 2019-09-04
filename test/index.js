var test = require('tape');
var isFunction = require('lodash.isfunction');
var every = require('lodash.every');
var isNumber = require('lodash.isnumber');

var secureRandomUint = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(secureRandomUint));
});

test('returns an uint', function(t) {
  t.plan(1);
  var array = new Array(1000);
  t.ok(every(array, function() {
    var uint = secureRandomUint();
    return isNumber(uint) && uint >= 0 && uint <= 4294967295;
  }));
});
