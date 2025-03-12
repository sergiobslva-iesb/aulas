// Importando Tabela de iMC do arquivo CalculadoraIMC.js
import{TabelaIMC,calcularIMC} from "./CalculadoraIMC.js";

console.log("Calculadora de IMC");
console.log(">>> Tabela do IMC <<<");
console.table(TabelaIMC);

const peso = 80;
const altura = 1.70;

const resultado = calcularIMC(peso, altura);

console.log("Resultado do IMC");
console.log(`IMC: ${resultado}`);