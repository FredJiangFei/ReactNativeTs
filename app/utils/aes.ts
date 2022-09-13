import CryptoJS from 'crypto-js';
import config from '../../config';

const encrypt = (plaintext) => {
    const key = CryptoJS.enc.Utf8.parse(config.secretKey);
    const option = {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse(config.secretKey),
    }
    return CryptoJS.AES.encrypt(plaintext, key, option).toString();
}

const decrypt = (ciphertext) => {
    const key = CryptoJS.enc.Utf8.parse(config.secretKey);
    const option = {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse(config.secretKey),
    }
    return CryptoJS.AES.decrypt(ciphertext, key, option).toString();
}

export default {
    encrypt,
    decrypt
};