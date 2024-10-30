//var, let e const = variaveis 
//variavel serve para armazenar informações

let nome = "Geovanna";
// string é um tipo de dado textual
console.log(nome);

// array [] colchetes
// array lista, é uma variavel especial onde podemos armazenar uma lista de dados 

let compras = [
    "Celular",
     "Miojo",
     "Pizza",
     "Biscoito",
     "Perfumes",
     "Coca",
     "Carro",
     "Energético",
     "Café",
     "RTX 40 90",
     "Pré treino",
     "Roupas"
];

// no array temos um indice, vai iniciar do numero 0
//console.log(compras)// mostra toda a lista

//console.log(compras[5])// Perfumes

// numero é do tipo number
let numeros = [1, 2, 3, 4, 5]
console.log(numeros);

//metodos de array
//forma de manipular dados

//adicionando o numero 6 no array:
numeros.push(6)
// push() adiciona/empurra no final da array

//adicionando o numero 0 no inicio:
numeros.unshift(0)
// adicionar ao inicio do  array

numeros.pop();
// vai remover o ultimo item do array

console.log(numeros.join("-"))
//exibe todo array separado por -


