const CryptoJS = require('crypto-js')

import * as crypto from 'crypto'

// Hashing

// const dictionary = {
//     name: 'val'
// }
// console.log(dictionary.name)
// dictionary.name = 'anita'
// console.log(dictionary.name)

/*
echo -n "input of any size" | openssl dgst -md5
echo -n "same output" | openssl dgst -md5
echo -n "same output" | openssl dgst -md5
*/

const md5hash = CryptoJS.MD5('futureproof')
console.log('md5hash futureproof', md5hash.toString())

// Cryptographic hashing

/*
echo -n "collision resistance" | openssl dgst -sha256
echo -n "hiding" | openssl dgst -sha256
echo -n "puzzle friendliness (brute force)" | openssl dgst -sha256
*/

const sha256hash = CryptoJS.SHA256('futureproof')
console.log('sha256hash futureproof', sha256hash.toString())

const keccakhash = CryptoJS.SHA3('futureproof', { outputLength: 256 }) // length in bits
console.log('keccackhash futureproof', keccakhash.toString())

const ripemd160hash = CryptoJS.RIPEMD160('futureproof')
console.log('ripemd160hash futureproof', ripemd160hash.toString())
