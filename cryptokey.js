const crypto = require('crypto');
const fs = require('fs');

const key = fs.readFileSync('key.pem');
const iv = fs.readFileSync('iv.pem');

const publicKey = fs.readFileSync('public.pem', 'utf8');

// console.log(key);
// console.log(iv);
const cryptoKey = crypto.publicEncrypt(publicKey, key);
// console.log(cryptoKey);

const cryptoIv = crypto.publicEncrypt(publicKey, iv);
// console.log(cryptoIv);

module.exports = { cryptoKey, cryptoIv };