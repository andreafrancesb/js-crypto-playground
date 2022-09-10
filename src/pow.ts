import * as CryptoJS from 'crypto-js'

let nonce = 0
let successful = false

// Proof of work
while (!successful) {
    console.log('nonce:', nonce)
    const data = `futureproof${nonce}`
    const sha256hash = CryptoJS.SHA256(data)
    const value = sha256hash.toString()
    console.log('value:', value)
    const output = value.startsWith('1')
    console.log('succes?', output)
    if (output) {
        successful = true
    }
    nonce++
}
