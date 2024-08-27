const fs = require('fs');
const crypto = require('crypto');

// 设置每个 chunk 的大小为 64KB
const key = fs.readFileSync('key.pem');
const iv = fs.readFileSync('iv.pem');
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let stream;
for (let i = 1; i <= 26; i++) {
    const chunk = fs.readFileSync(`./chunks/encrypted${i}.enc`);
    const dechunk = decipher.update(chunk);
    if(i === 1) {
        stream = dechunk;
    }else{
        stream = Buffer.concat([stream, dechunk]);
    }
}
fs.writeFileSync('dechunks.mp4', stream);
