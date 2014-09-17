var getRandomValues = require('get-random-values');

function secureRandomUint() {
  var buf = new Uint8Array(4);
  var dv = new DataView(buf.buffer);
  getRandomValues(buf);
  return dv.getUint32(0);
}

module.exports = secureRandomUint;