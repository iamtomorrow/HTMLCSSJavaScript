
// Creating our variables;
var userInput = window.document.getElementById('userInput');
var invOutput = window.document.getElementById('prgfOutput');

// This function will be responsible to perform and generate our inverse inputs;
function getInverse() {
    // Let's clean inverse input, that way, we will not join different outputs if the user don't reload the page before input again;
    invOutput.innerText = ''

    var inputWord = String(userInput.value);

    // Conditions to eliminate erros before show the inverse output the user;
    if (userInput.value.length == 0) {
        window.alert('Please, write something!')
    } else {
        for (var i = inputWord.length - 1; i >= 0; i--) {
            invOutput.innerText += inputWord[i];
        }
    }

    // Here, we will clean the input field;
    userInput.value = '';
    userInput.focus();
}
