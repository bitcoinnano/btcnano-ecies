# ECIES for btcnano

[![NPM Package](https://img.shields.io/npm/v/btcnano-ecies.svg?style=flat-square)](https://www.npmjs.org/package/btcnano-ecies)
[![Build Status](https://img.shields.io/travis/bitcoinnano/btcnano-ecies.svg?branch=master&style=flat-square)](https://travis-ci.org/bitcoinnano/btcnano-ecies)
[![Coverage Status](https://img.shields.io/coveralls/bitcoinnano/btcnano-ecies.svg?style=flat-square)](https://coveralls.io/r/bitcoinnano/btcnano-ecies)

A module for [bitcore][bitcore] that implements the [Elliptic Curve Integrated Encryption Scheme (ECIES)][ECIES]. Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

See [the main bitcore repo](https://github.com/bitpay/bitcore) or the [bitcore guide on ECIES](http://bitcore.io/guide/module/ecies/index.html) for more information.

Credit to [@ryanxcharles][ryan] for the original implementation.

## Getting started

ECIES will allow to securely encrypt and decrypt messages using ECDSA key pairs (btcnano cryptography).

```javascript
var alice = ECIES()
  .privateKey(aliceKey)
  .publicKey(bobKey.publicKey);

var message = 'some secret message';
var encrypted = alice.encrypt(message);

// encrypted will contain an encrypted buffer only Bob can decrypt

var bob = ECIES()
  .privateKey(bobKey)
  .publicKey(aliceKey.publicKey);
var decrypted = bob
  .decrypt(encrypted)
  .toString();
// decrypted will be 'some secret message'
```

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore/blob/master/CONTRIBUTING.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2015-2021 Btcnano, Inc. Btcnano is a trademark maintained by Btcnano, Inc.

[bitcore]: http://github.com/bitpay/bitcore
[ECIES]: http://en.wikipedia.org/wiki/Integrated_Encryption_Scheme
[ryan]: http://github.com/ryanxcharles
