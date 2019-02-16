process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const { exec } = require('openssl-wrapper')
const https = require('https')
const selfSigned = require('openssl-self-signed-certificate')
const { test } = require('ava')

const lib = require('./index.js')

test.before(() => {
  const options = {
    key: selfSigned.key,
    cert: selfSigned.cert
  }

  https.createServer(options, (req, res) => res.end('Hello World!')).listen(5000)
})

test.cb('Same result as openssl', t => {
  https.get('https://localhost:5000', (res) => {
    const libResult = lib(res.connection.getPeerCertificate()).toString('base64')
    exec('x509', Buffer.from(selfSigned.cert), { pubkey: true, noout: true }, (err, buffer) => {
      if (err) {
        t.fail('Could not get comparison result from openssl')
      } else {
        const opensslResult = buffer
          .toString()
          .replace('-----BEGIN PUBLIC KEY-----', '')
          .replace('-----END PUBLIC KEY-----', '')
          .replace(/(\r\n|\n|\r)/gm, '')
        if (opensslResult === libResult) {
          t.pass()
        } else {
          t.fail('Results does not match')
        }
      }
      t.end()
    })
  })
})

test('Throw error if modulus or exponent is not set', t => {
  const error = t.throws(() => {
    lib({})
  }, Error)

  t.is(error.message, 'modulus or exponent not set')
})
