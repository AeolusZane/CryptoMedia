const fs = require('fs');
const crypto = require('crypto');

// 设置每个 chunk 的大小为 64KB
const stream = fs.createReadStream('./encrypted.mp4', { highWaterMark: 64 * 1024 });
const key = fs.readFileSync('key.pem');
const iv = fs.readFileSync('iv.pem');
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
stream.pipe(decipher).pipe(fs.createWriteStream('decrypted.mp4'));
