/* criando uma função para calculo do IMC*/
function calcImc (){
 let altura = (document.GetElementById("al").value)/100;//divisão por 100 para converter em metros

 let peso = document.GetElementById("ps").value
 if (isNaN(peso) || isNaN(altura)) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
}

const alturaEmMetros = altura / 100; // Convertendo cm para metros
const imc = peso / (alturaEmMetros * alturaEmMetros);
alert(`Seu IMC é: ${imc.toFixed(2)}`);
}

//converter para numero
altura = parseFloat(altura);
peso = parseFloat(peso)
/*
tipos de dados:
int= numeros inteiros
float= de ponto flutuante, exemplo o preso da gasolina 6.27
string= texto
boolean = verdadeiro ou falso
*/

let imc = peso / (altura * altura);
window.alert("Seu IMC é:" + imc);

function alternarTemas(){
    const corpo = document.body;
    corpo.classList.toggle("escuro");
}
    function alternarTemas(){
    const corpo = document.body;
    corpo.classList.toggle("claro");
}



    