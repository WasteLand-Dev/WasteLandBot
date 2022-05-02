var CryptoJS = require("crypto-js");
require("dotenv").config();

const config = require('./config/botconfig.json');
const token = config.originaltoken;
const key = config.key;

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(token, key).toString();
console.log(ciphertext);