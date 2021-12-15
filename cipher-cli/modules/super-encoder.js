// Import the encryptors functions here.
//import { caesarCipher, symbolCipher, reverseCipher } from './encryptors.js'
const encryptors = require('./encryptors.js');

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    const encrypt1 = encryptors.caesarCipher(str, 6);
    const encrypt2 = encryptors.symbolCipher(encrypt1);
    const encrypt3 = encryptors.reverseCipher(encrypt2);
    return encrypt3;
}

const decodeMessage = (str) => {
    // Use the encryptor functions here.
    const encrypt1 = encryptors.caesarCipher(str, -6);
    const encrypt2 = encryptors.symbolCipher(encrypt1);
    const encrypt3 = encryptors.reverseCipher(encrypt2);
    return encrypt3;
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
        output = encodeMessage(str);
    }
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str);
    }

    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);