const bip39 = require('bip39');

const words = bip39.generateMnemonic();

console.log(words);