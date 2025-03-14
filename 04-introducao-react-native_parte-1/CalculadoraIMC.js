// Sistema de Módulos (ES6) -> EXPORTANDO

export const TabelaIMC = [
    { limite: 18.8, classificacao: "Anorexia, toma vergonha" },
    { limite: 24.9, classificacao: "Normal" },
    { limite: 29.9, classificacao: "Sobrepeso" },
    { limite: 34.9, classificacao: "Obesidade Grau I" },
    { limite: 37.0, classificacao: "Obesidade Grau II" },
    { limite: 39.9, classificacao: "Obesidade Grau III" },
    { limite: 43.9, classificacao: "Magreza" },
];

export const calcularIMC = (peso, altura) => {
    return (peso / altura * altura);
}