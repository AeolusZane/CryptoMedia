const fs = require('fs');
const { decryptedKey, decryptedIv } = require('./readkey.js');
const key = fs.readFileSync('key.pem');
const iv = fs.readFileSync('iv.pem');
console.log(key);
console.log(iv);


console.log("*********")
console.log(decryptedKey);
console.log(decryptedIv)