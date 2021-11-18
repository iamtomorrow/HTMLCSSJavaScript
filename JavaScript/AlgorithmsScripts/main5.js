// here I was trying to verify if the second word in the array contains all the letters of the second word in the array;
// I've used a regex to decompose all the letters in the two words and try to find for some kind of duplicated letter that could cause some problem;
// but actually I didn't use it. the key here is in the line 27 where I compare two integers variables. matches will be incremented if in the for loop we find the same letters in the two words;
// at the same time the value of test will be updated with the value of matches. if the two varibales have the same value the code will know that there was no match in the previews loop and will immediately return false;
// I think this solution is way more fast because the code will not need to continue analysing if the condition is already wrong;

function mutation(arr) {
    let stWord = arr[0].toLowerCase();
    let ndWord = arr[1].toLowerCase();
    let matches = 0;
    let test = 0;

    let wordLettersRegex = /\w/ig;
    let stWordLetters = stWord.match(wordLettersRegex);
    let ndWordLetters = ndWord.match(wordLettersRegex);

    let reGex = /(\w.*)\1/ig;
    let duplicateLetters = stWord.match(reGex);

    for (let e = 0; e < ndWordLetters.length; e++) {
        for (let i = 0; i < stWordLetters.length; i++) {
            if (ndWord[e] == stWord[i]) {
                matches++;
            }
        }
        if (test == matches) {
            return false;
        }
        test = matches;
    }

    return true;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
