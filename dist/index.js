/** Uppercase and Lowercase alphabet **/
export default function rnId(length = 8) {
  let code = "";
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * (122 - 65) + 65);
    if (num <= 96 && num >= 91) num += 6;
    code += String.fromCodePoint(num);
  }
  return code;
}

/** Just Uppercase Alphabet **/
function upId(length = 6) {
  let code = "";
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * (90 - 65) + 65);
    code += String.fromCodePoint(num);
  }

  return code;
}

/** Just Lowercase Alphabet **/
function lowId(length = 6) {
  let code = "";
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * (122 - 97) + 97);
    if (num <= 96 && num >= 91) num += 6;
    code += String.fromCodePoint(num);
  }
  return code;
}

/** Just Numbers **/
function numId(length = 6) {
  let code = "";
  for (let i = 0; i < length; i++) {
    code += String(Math.floor(Math.random() * (9 - 0)));
  }
  return code;
}

/* Number , Alphabet and special character */
function mxId(length = 16) {
  let code = "";
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * (122 - 48) + 48);
    if (num <= 96 && num >= 91) num += 6;
    if (num >= 58 && num <= 61) num -= 23;
    code += String.fromCodePoint(num);
  }
  return code;
}

export { mxId, upId, lowId, numId };
