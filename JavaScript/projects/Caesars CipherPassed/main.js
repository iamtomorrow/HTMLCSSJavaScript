
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function rot13(str) {
    const strLen = str.length;
    let decodedStr = "";

    for (let i = 0; i < strLen; i++) {
        let encodedLetterIndex = alphabet.indexOf(str[i]);
        let decodedLetterIndex = encodedLetterIndex + 13;
        if (encodedLetterIndex != -1) {
            if (decodedLetterIndex > 25) {
                decodedLetterIndex = (13 - (25-encodedLetterIndex)) - 1;
            }
            decodedStr += alphabet[decodedLetterIndex];
        }
        else {
            decodedStr += str[i];
        }
        //console.log(decodedLetterIndex);
    }

    return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));

// output => FREE CODE CAMP
