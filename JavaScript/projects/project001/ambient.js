
// Criação das variáveis através do id com o getElementById();
var num = window.document.getElementById('num');
var btnIns = window.document.getElementById('btnInserir');
var range = window.document.getElementById('slctIntervalo');
var btnAnlsr = window.document.getElementById('btnAnalisar');
var res = window.document.querySelector('div#res');
let bodyBackg = window.document.getElementById('body');

// Criação do vetor responsável por armazenar os valores inseridos pelo usuário;
var outNum = [];

// Aqui iremos mudar a cor do background da página, de forma superficial, conforme a hora do dia em que o usuário estiver acessando;
var hoje = new Date;
var agora = hoje.getHours();

if (agora >= 0 && agora < 12) {
    bodyBackg.style.backgroundColor = '#F7E2A1';
} else if (agora >= 12 && agora < 18) {
    bodyBackg.style.backgroundColor = '#F76C3E';
} else if (agora >= 18 || agora < 23) {
    bodyBackg.style.backgroundColor = 'black';
}

// Função responsável por realisar a primeira filtragem dos dados inseridos pelo usuário. Apartir daqui, os dados estarão a um passo de serem inseridos no vetor;
function inserir() {

    // Condições para o armazenamento do valor no vetor;
    if (num.value.length == 0) {
        window.alert('Valores nulos não são armazenados no vetor! Tente novamente.');
    } else if (num.value == 0) {
        window.alert('Valor zero não está disponível! Tente novamente.');
    } else if (num.value < 0) {
        window.alert('Valores negativos não estão disponíveis! Tente novamente.');
    } else if (num.value > 100) {
        window.alert('Valores acima de cem não estão disponíveis! Tente novamente.');
    } else {
        // Confirmando a condição de inserção;
        window.alert('Ok');

        // Criando a variável number;
        var n = Number(num.value);

        var item = window.document.createElement('option');

        // Para evitar a reentrada do valor, e assim eliminar valores repetidos, iremos criar um filtro que descartará a possibilidade de repetição de valores no vetor;
        if (outNum.includes(n) == true) {
            window.alert(`O valor ${n} já se encontra no vetor! Digite outro número e tente novamente.`);
        } else {
            window.alert('Ok');
            // Após a análise, o valor finalmente será inserido no vetor;
            outNum.push(n);

            // Inserindo o valor dentro do intervalo <select> em HTML através de um <option>;
            item.innerHTML = `${n} inserido`;

            // A partir de agora, o valor está pronto para ser visualizado pelo usuário no <select>;
            range.appendChild(item);
            
        }

        // Limpando campo onde se encontra o valor inserido;
        num.value = '';
        num.focus();

    }
}

// A partir de agora o resultado final, que irá definir algumas características do vetor, serão mostradas para o usuário;
function analisar() {
    btnAnlsr.style.backgroundColor = 'black';
    btnAnlsr.style.color = 'white';

    // Criação dos parágrafos que irão conter, independentemente, os dados contido no vetor: 1 (prgf1) - Tamanho do vetor; 2 (prgf2) - Maior valor; 3 (prgf3) - Menor valor; 4 (prgf4) - Soma de todos os valores do vetor; 5 (prgf5) - Média do vetor;
    var prgf1 = window.document.createElement('p');
    var prgf2 = window.document.createElement('p');
    var prgf3 = window.document.createElement('p');
    var prgf4 = window.document.createElement('p');
    var prgf5 = window.document.createElement('p');

    // 1 - Calculando a quantidade de valores inseridos no vetor;
    var quant = outNum.length;

    // 2, 3 - Utilização de um loop for() para varrer o vetor e encontrar o maior e o menor valore simultâneamente;
    var maior;
    var menor;

    for (var i = 0; i < outNum.length; i++) {
        if (i == 0) {
            var maior = outNum[0];
            var menor = outNum[0];
        } else {
            if (outNum[i] > maior) {
                var maior = outNum[i];
            } if (outNum[i] < menor) {
                var menor = outNum[i];
            }
        }
    }

    // 4 Criando loop for() para calcular a somatória do vetor;
    var soma = 0;

    for (var i = 0; i < outNum.length; i++) {
        soma += outNum[i];
    }

    // Calculando a média do vetor;
    var med = soma / outNum.length;

    // Dados que serão apresentados no programa;
    prgf1.innerHTML = `Ao todo foram inserido ${quant} valores no intervalo.`;
    prgf2.innerHTML = `O maior valor inserido foi o ${maior}.`;
    prgf3.innerHTML = `O menor valor inserido foi o ${menor}.`;
    prgf4.innerHTML = `A somatória do vetor é \u03A3: ${soma}.`;
    prgf5.innerHTML = `A média do vetor é ${med}.`;

    // Inserindo os parágrafos no código via JavaScript;
    res.innerHTML = '';
    res.appendChild(prgf1);
    res.appendChild(prgf2);
    res.appendChild(prgf3);
    res.appendChild(prgf4);
    res.appendChild(prgf5);
    
}
