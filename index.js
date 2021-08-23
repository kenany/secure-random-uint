const getRandomValues = require('get-random-values');

/**
 * @returns {number}
 */
function secureRandomUint() {
  const buf = new Uint8Array(4);
  const dv = new DataView(buf.buffer);
  getRandomValues(buf);
  return dv.getUint32(0);
}

module.exports = secureRandomUint;
