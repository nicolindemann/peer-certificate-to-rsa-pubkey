# peer-certificate-to-rsa-pubkey

[![npm version](https://badge.fury.io/js/peer-certificate-to-rsa-pubkey.svg)](https://badge.fury.io/js/peer-certificate-to-rsa-pubkey)
[![npm](https://img.shields.io/npm/l/peer-certificate-to-rsa-pubkey.svg?maxAge=2592000)](https://www.npmjs.com/package/peer-certificate-to-rsa-pubkey)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/nicolindemann/peer-certificate-to-rsa-pubkey.svg)](https://greenkeeper.io/)
[![Dependency Status](https://dependencyci.com/github/nicolindemann/peer-certificate-to-rsa-pubkey/badge)](https://dependencyci.com/github/nicolindemann/peer-certificate-to-rsa-pubkey)
[![Build Status](https://travis-ci.org/nicolindemann/peer-certificate-to-rsa-pubkey.svg?branch=master)](https://travis-ci.org/nicolindemann/peer-certificate-to-rsa-pubkey)
[![Code Climate](https://codeclimate.com/github/nicolindemann/peer-certificate-to-rsa-pubkey/badges/gpa.svg)](https://codeclimate.com/github/nicolindemann/peer-certificate-to-rsa-pubkey)
[![Test Coverage](https://codeclimate.com/github/nicolindemann/peer-certificate-to-rsa-pubkey/badges/coverage.svg)](https://codeclimate.com/github/nicolindemann/peer-certificate-to-rsa-pubkey/coverage)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Known Vulnerabilities](https://snyk.io/test/npm/peer-certificate-to-rsa-pubkey/badge.svg)](https://snyk.io/test/npm/peer-certificate-to-rsa-pubkey)

Creates RSA Public Key DER Buffer of TLSSocket.getPeerCertificate Result.

Based on this [stackoverflow](https://stackoverflow.com/questions/18835132/xml-to-pem-in-node-js) question and answer.

## Install ##
```bash
npm install peer-certificate-to-rsa-pubkey
```

## Usage ##
``` javascript
var rsaPubKey = require('peer-certificate-to-rsa-pubkey')

const exampleRequestHandler = (req, res) => {
    const rsaPubKeyBuffer = /* Buffer */ rsaPubKey(res.connection.getPeerCertificate())
    // rsaPubKeyBuffer is a DER represantion of the public key

}
```

If TLSSocket.getPeerCertificate does not return RSA encrypted
public key information an error will be thrown.

## Testing and Code Coverage ##
```javascript
npm test
```
