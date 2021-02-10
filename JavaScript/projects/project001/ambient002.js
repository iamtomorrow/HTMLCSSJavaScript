// Testando loop for() para análise de inputs de usuários;

var myArr = [6, 3, 2, 0, 8, 9];

var maior;
var menor;

for (var i = 0; i < myArr.length; i++) {
    if (i == 0) {
        var maior = myArr[0];
        var menor = myArr[0];
    } else {
        if (myArr[i] > maior) {
            var maior = myArr[i];
        } if (myArr[i] < menor) {
            var menor = myArr[i];
        }
    }
}

console.log('Hello');
console.log(maior);
console.log(menor);


