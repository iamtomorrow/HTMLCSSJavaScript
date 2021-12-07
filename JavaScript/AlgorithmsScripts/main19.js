
function translatePigLatin(str) {
  const regexVowels = /^(a|e|i|o|u)/ig;
  let consoantMatches = 0;

  if (str.match(regexVowels)) {
    str = str.split('');
    str.push("way");
  }
  else {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(regexVowels) === null) {
        str.push(str[i]);
        str.shift();
        consoantMatches++;
        i--;
        if (consoantMatches === str.length) {
          str.push('ay');
          break;
        }
      }
      else {
        str.push('ay');
        break;
      }
    }
  }
  return str.join('');
}

console.log(translatePigLatin("rhythm"));
