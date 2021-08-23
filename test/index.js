const test = require('tape');
const isFunction = require('lodash.isfunction');
const every = require('lodash.every');
const isNumber = require('lodash.isnumber');

const secureRandomUint = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(secureRandomUint));
});

test('returns an uint', (t) => {
  t.plan(1);
  const array = new Array(1000);
  t.ok(every(array, () => {
    const uint = secureRandomUint();
    return isNumber(uint) && uint >= 0 && uint <= 4294967295;
  }));
});
