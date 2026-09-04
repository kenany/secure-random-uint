# secure-random-uint

Generate a cryptographically secure uint.

## Example

``` javascript
import { secureRandomUint } from 'secure-random-uint';

secureRandomUint();
// => 4
```

## Installation

``` bash
$ pnpm add secure-random-uint
```

## API

``` javascript
import { secureRandomUint } from 'secure-random-uint';
```

### `secureRandomUint()`

Returns a cryptographically secure _Number_ uint. Uses
[get-random-values](https://github.com/KenanY/get-random-values), so an _Error_
will be thrown if there is no secure random number generator available.
