import * as crypto from 'crypto'
const CryptoJS = require('crypto-js')
const promptSync = require('prompt-sync')({ sigint: true }); 

let cipherText = promptSync('Enter a cipherText: ');
let sharedKey =  promptSync('Enter sharedkey: ');

{const bytes = CryptoJS.AES.decrypt(cipherText, sharedKey)
const plainText = bytes.toString(CryptoJS.enc.Utf8)
console.log(plainText)}

const plainText = decrypt(cipherText)
console.log("Your decrypted message:", plainText)

function decrypt(cipherText: any): String {
    const bytes = CryptoJS.AES.decrypt(cipherText, sharedKey)
    return bytes.toString(CryptoJS.enc.Utf8)
}

