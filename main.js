function inserir(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function backSpace(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
}











/*const pessoa = ["rafael", "augusto", "developer", 29];

alert(Array.isArray(pessoa));
*/

/*const pessoa = ["rafael", "augusto", 29, "developer"];

alert(pessoa[pessoa.length - 1]);
*/

/*const lista = ["arroz","feijão","macarrão"];
console.log(lista[2]);
*/

/*function divisao(valor1,valor2){
    return valor1 / valor2;
}

var valor1 = 50;
var valor2 = 100;

var total = divisao(valor1,valor2);

console.log(`O valor referente a esta divisão ${total} é resultado de muitos estudos`);
*/

/*function sub(numero1, numero2){
    return numero1 - numero2;
}

var numero1 = 100;
var numero2 = 200;

var total = sub(numero1, numero2);

console.log(`o valor referente a esta subtração ${total} é resultado de muitos e muitos estudos`);
*/

/*
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);
*/
/*
const musica = 'brilho no olhar';
const pontuação = 9;
const AltaPontuação = 10;
const saida = `eu gosto da musica ${musica}. eu obtive a pontuação de ${pontuação/AltaPontuação * 100}%`;
console.log(saida);
*/


/*
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(myString2);
*/

/*
var nome = "Rafael";
var saudações = "Muito prazer";

alert(`${saudações}, ${nome}`);
*/

/*function saudacoes(){
    const nome = prompt('Por favor, nos informe o seu nome?');
    alert(`Olá ${nome} prazer em ter voce por aqui :)`);
}
*/


