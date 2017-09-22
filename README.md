# peer-certificate-to-rsa-pubkey

Creates RSA Public Key DER Buffer of TLSSocket.getPeerCertificate Result.

Based on this [stackoverflow](https://stackoverflow.com/questions/18835132/xml-to-pem-in-node-js) question and answer.

## Install ##
```
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