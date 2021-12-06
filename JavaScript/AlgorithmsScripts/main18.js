
function spinalCase(str) {
    const upperRegex = /[A-Z]/g;
    const symbolsRegex = /\s|\_|\-/g;
    str = str.replace(symbolsRegex, " ");
    
    str = str.split('')
    str.map((letter, index ) => {
        let lastIndex = index - 1;
        if (letter.match(upperRegex) && index != 0 && str[lastIndex] !== " ") {
            let lowercase = letter.toLowerCase();
            str.splice(index, 1, '-' + lowercase);
        }
    })

    str = str.join('');
    const symbolMatches = str.match(symbolsRegex);
    if (symbolMatches !== null) str = str.replace(symbolsRegex, "-");

    return str.toLowerCase();
}

console.log(spinalCase('The_Andy_Griffith_Show'));
