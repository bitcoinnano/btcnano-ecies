'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on btcnano-ecies Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('btcnano-lib').errors.extend(spec);

