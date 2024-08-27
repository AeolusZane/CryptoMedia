/**
 * 生成密钥和初始向量
 * 用于加密视频
 * rsa加密效率太低
 */
const crypto = require('crypto');
const fs = require('fs');


// 设置密钥和初始向量（IV）
const key = crypto.randomBytes(32);  // 256-bit key for AES
const iv = crypto.randomBytes(16);   // 128-bit IV


// 本地保存密钥和 IV

fs.writeFileSync('key.pem', key);
fs.writeFileSync('iv.pem', iv);