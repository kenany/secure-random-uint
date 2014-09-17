# secure-random-uint

[![Build Status](https://img.shields.io/travis/KenanY/secure-random-uint.svg)](https://travis-ci.org/KenanY/secure-random-uint)
[![Dependency Status](https://img.shields.io/gemnasium/KenanY/secure-random-uint.svg)](https://gemnasium.com/KenanY/secure-random-uint)

Generate a cryptographically secure uint.

[![testling](https://ci.testling.com/kenany/secure-random-uint.png)](https://ci.testling.com/KenanY/secure-random-uint)

## Example

``` javascript
var secureRandomUint = require('secure-random-uint');

secureRandomUint();
// =>
```

## Installation

``` bash
$ npm install secure-random-uint
```

## API

``` javascript
var secureRandomUint = require('secure-random-uint');
```

### `secureRandomUint()`

Returns a cryptographically secure _Number_ uint. Uses
[get-random-values](https://github.com/KenanY/get-random-values), so an _Error_
will be thrown if there is no secure random number generator available.