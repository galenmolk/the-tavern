const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const shift = 3;

function isLower(char) {
  return char === char.toLowerCase();
}

function sillyEncrypt(text) {
    const shiftedText = text
      .split('')
      .map(char => {
        const index = alphabet.indexOf(char.toLowerCase());
        
        if (index === -1) {
          return char;
        }
        const shiftedIndex = (index + shift) % alphabet.length;
        const newChar = alphabet[shiftedIndex];
        return isLower(char) ? newChar : newChar.toUpperCase();
      })
      .join('');

    return shiftedText;
}

function sillyDecrypt(text) {
    const shiftedText = text
      .split('')
      .map(char => {
        const index = alphabet.indexOf(char.toLowerCase());

        if (index === -1) {
          return char;
        }
        const shiftedIndex = (index - shift + alphabet.length) % alphabet.length;
        const newChar = alphabet[shiftedIndex];
        return isLower(char) ? newChar : newChar.toUpperCase();
      })
      .join('');

    return shiftedText;
}

export { sillyEncrypt, sillyDecrypt };
