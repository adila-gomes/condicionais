/* Comandos condicionais mais comuns 
if     -> SE
else   -> SENÃO */

//Exemplo 1: condicional simples
let numero = 5;
if(numero > 2) {console.log(numero)};

//Exemplo 2: condicional composta
let aluno ="Kaibert";
let idade = 18;

if(idade < 18){console.log("É menor de idade");}
else {console.log("É maior de idade");}

/* Exercício:

1) Crie duas variáveis conforme a seguir:
Nota 1 (contendo um valor de 0 a 10)
Nota 2 (contendo outro valor de 0 a 10)

2) Crie uma variável chamada "média" que receberá o valor cauculado da média das duas notas informadas. DICA: você deverá somar as duas notas e depois dividr por 2.

3) Programe uma condicional que verifique o valor da média cauculada. Se a média fo maior/igual a 7, mostre "aprovado". Caso contrário, mostre "reprovado".
*/

let nota1 = 7;
let nota2 = 5;
let media = (nota1 + nota2) / 2;
console.log(media);

if(media >= 7){
    console.log("Aprovado!!");
}
else {
    console.log("Reprovado!!");
}

//ShortHand if/else - versão abreviada 

let situacao = media >= 7 ? "Aprovado" : "Reprovado";
console.log(situacao);
