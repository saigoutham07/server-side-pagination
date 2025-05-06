import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})

export class EncDecData {
    constructor() { }
    // For testing
    plainEncryption(value) {
        const encrypted = CryptoJS.AES.encrypt(value.toString(), 'E546C8DF278CD5931069B522E695D4F2');
        return encrypted.toString();
    }

    // The set method is use for encrypt the value.
    encrypt(value) {
        const key = CryptoJS.enc.Utf8.parse('E546C8DF278CD5931069B522E695D4F2');
        const iv = CryptoJS.enc.Utf8.parse('E546C8DF278CD5931069B522E695D4F2');
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
            {
                keySize: 128 / 8,
                iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });

        return encrypted.toString();
    }

    // The get method is use for decrypt the value.
    decrypt(value) {
        const key = CryptoJS.enc.Utf8.parse('E546C8DF278CD5931069B522E695D4F2');
        const iv = CryptoJS.enc.Utf8.parse('E546C8DF278CD5931069B522E695D4F2');
        const decrypted = CryptoJS.AES.decrypt(value, key, {
            keySize: 128 / 8,
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
