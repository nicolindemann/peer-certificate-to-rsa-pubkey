'use strict'

const toHex = number => { return (Number(number).toString(16).length % 2 === 0 ? '' : '0') + Number(number).toString(16) }
const encodeLengthHex = n => { return (n <= 127) ? toHex(n) : toHex(128 + (toHex(n).length / 2)) + toHex(n) }
const prepadSigned = hexStr => { return (parseInt(hexStr[0], 16) >= 8 ? '00' : '') + hexStr }

const asn1encode = (type, n) => {
  if (type === '03') n = '00' + n                 // Special Handling for BIT STRINGS
  return type + (n ? encodeLengthHex(n.length / 2) : '') + (n || '00')
}

module.exports = certificate => {
  if (!certificate.modulus || !certificate.exponent) {
    throw new Error('modulus or exponent not set')
  }

  return Buffer.from(
    asn1encode('30',                              // SEQUENCE
      asn1encode('30',                            // SEQUENCE
        asn1encode('06', '2a864886f70d010101') +  // OBJECT IDENTIFIER
        asn1encode('05')) +                       // NULL
      asn1encode('03',                            // BIT STRING
        asn1encode('30',                          // SEQUENCE
          asn1encode('02',                        // INTEGER
            prepadSigned(
              certificate.modulus
            )) +
          asn1encode('02',                        // INTEGER
            prepadSigned(
              toHex(certificate.exponent)
            ))))), 'hex')
}
