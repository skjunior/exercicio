/*
* Sergio krug
*/


//Resposta 1
//as duas variaveis tem omesmos valor, porem como foi usado let se torna uma variavel mutavel, por isso fica com o valor de 5,
// q foi o valor alterado na linha 12 no meu exemplo.
let g = 10
let b = 10
console.log(b)
b = 5
console.log(g, b)



//Resposta 2

//nesse caso o conteudo das "caixas" são trocados.
// exemplo:
// let = 10 
//let = 20
// C passa a ter 10
//B passa a ser vazio
// A passa a ter 20

//Resposta 3

let trabalhoDia
let ganhoDia;

trabalhoDia = prompt("Quantas horas você trabalha por dia?");
ganhoDia = prompt("Quanto você recebe por dia?");
console.log("Você ganha", "R$", ganhoDia / trabalhoDia, "por hora.");

//exercicio de codigo 1

let nome;
let idade;
console.log(typeof idade);
console.log(typeof nome);

//creio que isso aconteceu por não ter sido atribuido valores nas variaveis,
//caso eu colocasse um determinado valor seria essa a "resposta" que apqreceria.

nome = prompt("Como você se chama?");
idade = prompt("Quantos anos você tem ?");
console.log("Olá", nome, "você tem", idade, "anos.");

//exercicio de codigo 2

let resposta1;


let pergunta1;
let pergunta2;

pergunta2 = prompt("Você acha que é possivel um virús zumbi?");
if(pergunta2 === "sim") {console.log("ok, proxima");
} else if (pergunta2 === "não") {
    console.log("Certo, seguimos para proxima.");
} else {console.log("Apenas com 'sim' ou 'não'.");}

resposta1 = prompt("Você é apegado aos seus amigos/familiares?");
if (resposta1 === "sim") {console.log("Muito bem, proxima etapa.");  
} else if (resposta1 === "não") {
    console.log("Ok. seguimos então.");
} else {console.log("Responda apenas com 'Sim' ou 'Não'.");}


pergunta1 = prompt("Se um dos seus amigos/familaiares se transforma-se em um zumbi, você mataria para sobreviver?");
if(pergunta1 === "sim") {console.log("Muito bem.");
} else if (pergunta1 === "não") {
    console.log("Ok, entendo.");
} else {console.log("Apenas com 'sim' ou 'não'.");}

let a = 1;
let B = 2;
let c;
c = a;
a = B;
B = c;
console.log(a,B,c);
