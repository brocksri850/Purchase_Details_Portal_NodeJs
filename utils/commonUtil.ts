import constant from "../src/common/constant";
var cryptoJs = require('crypto-js')
const crypto = require("crypto");

export class CryptoCommon {

    constructor() { }

    encrypt(reqObject: any) {
        var ciphertext = cryptoJs.AES.encrypt(JSON.stringify(reqObject), "adloggsangular&5&secret@mission");
        return encodeURIComponent(ciphertext.toString())
    }

    decrypt(reqHash: any) {
        var bytes = cryptoJs.AES.decrypt(decodeURIComponent(reqHash), "adloggsangular&5&secret@mission");
        return JSON.parse(bytes.toString(cryptoJs.enc.Utf8))
    }
}

export var cryptoCommon = new CryptoCommon();