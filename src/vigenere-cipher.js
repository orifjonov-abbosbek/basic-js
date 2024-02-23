const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  validateArgs(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
  }

  transform(message, key, isEncrypt) {
    this.validateArgs(message, key);

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      const currentChar = message[i];

      if (this.alphabet.includes(currentChar)) {
        const keyChar = key[j++ % key.length];
        const keyIndex = this.alphabet.indexOf(keyChar);
        const shift = isEncrypt ? keyIndex : -keyIndex;

        const currentIndex = this.alphabet.indexOf(currentChar);
        const newIndex = (currentIndex + shift + 26) % 26;

        result += this.alphabet[newIndex];
      } else {
        result += currentChar;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }

  encrypt(message, key) {
    return this.transform(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.transform(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
