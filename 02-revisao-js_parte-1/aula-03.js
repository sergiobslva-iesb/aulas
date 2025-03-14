//Objeto
let pessoa = {
    nome: "Sérgio",
    idade: 40,
    cidade: "Brasília"
};

let endereco = {
    cidade: "Samambaia",
    uf: "DF"
};

pessoa.email = "sergiobslva@gmail.com";
delete pessoa.idade;
console.log(pessoa);

let { altura, peso } = pessoa;
console.log(pessoa);

//Propagação
let pessoaCompleta = { ...pessoa, ...endereco }
console.log(pessoaCompleta);

//Declaração de Funções
//Função Normal
function saudacao(nome){
    return `Olá, ${nome}!`;
};

console.log(saudacao("Sérgio Silva"));

//Função Anonima
const somar = function(n1, n2){
    return n1 + n2;
};

console.log(somar(10, 98.5));

//Módulos (ES6)
export const soma = (a, b) => a + b;
export const 