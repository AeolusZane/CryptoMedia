# Crypto Video

## Interpretation of Commands

`make keygen`
generate key, this would generate to pairs of keys.

keygen1.js to generate aes key pair, it's used for encrypting video or video chunks.

keygen.js to generate rsa key pair, it's used for encrypting aes key pair.

`make crypfile`
encrypting video

`make decrypfile`
decrypting video

`make enchunk`
encrypting video chunks

`make dechunk`
decrypting video chunks

## Usage
sever generates aes key and using user's public key(public.pem) to encrypt aes key pair and send it to user.

user can use private key to decrypt video chunks or video.

server can use different pairs of aes keys to encrypt every single video chunk, or just encrypt a whole video.


## Tips
u can use sha256 to generate a hash string using your own words, like this.
then using a random 16bit iv.

```javascript
const { createHmac } = require('node:crypto');
const hash = createHmac('sha256', 'hello')
    .update('I love cupcakes')
    .digest('hex');
```
