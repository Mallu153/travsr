import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EncrDecrServiceService {
  constructor() {}

  encryptUsingAES256(data: any) {
    if(data){
      let _key = CryptoJS.enc.Utf8.parse(environment.CRYPTO_SK);
      let _iv = CryptoJS.enc.Utf8.parse(environment.CRYPTO_IV);

      let encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      //console.log(encrypted.toString());
      return encrypted.toString();
    }

  }
  decryptUsingAES256(data: any) {
    if(data){
      let _key = CryptoJS.enc.Utf8.parse(environment.CRYPTO_SK);
      let _iv = CryptoJS.enc.Utf8.parse(environment.CRYPTO_IV);
      const decrypted = CryptoJS.AES.decrypt(data, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
      return decrypted;
    }

  }
}
