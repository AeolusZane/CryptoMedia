const fs = require('fs');
const crypto = require('crypto');
const { cryptoKey, cryptoIv } = require('./cryptokey.js');

const privateKey = fs.readFileSync('private.pem', 'utf8');

const decryptedKey = crypto.privateDecrypt(privateKey, cryptoKey);
const decryptedIv = crypto.privateDecrypt(privateKey, cryptoIv);


module.exports = { decryptedKey, decryptedIv };