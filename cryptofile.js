const fs = require('fs');
const crypto = require('crypto');

// 设置每个 chunk 的大小为 64KB
const stream = fs.createReadStream('./demo.mp4', { highWaterMark: 64 * 1024 });
const key = fs.readFileSync('key.pem');
const iv = fs.readFileSync('iv.pem');
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
stream.pipe(cipher).pipe(fs.createWriteStream('encrypted.mp4'));
