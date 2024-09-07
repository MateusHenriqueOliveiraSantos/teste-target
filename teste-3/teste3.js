function calcularFaturamento(faturamentoDiario) {
    const faturamentoDias = faturamentoDiario.filter(valor => valor > 0);

    if (faturamentoDias.length === 0) {
        return "Não há faturamento nesses dias!";
    }

    const menorFaturamento = Math.min(...faturamentoDias);
    const maiorFaturamento = Math.max(...faturamentoDias);

    const totalFaturamento = faturamentoDias.reduce((acc, valor) => acc + valor, 0);
    const mediaFaturamento = totalFaturamento / faturamentoDias.length;

    const diasAcimaDaMedia = faturamentoDias.filter(valor => valor > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const faturamentoDiario = [0, 0, 1000, 0, 0, 2000, 0, 0, 500, 3000, 0, 1000, 0, 0, 0]; // Exemplo de vetor
const resultado = calcularFaturamento(faturamentoDiario);

if (typeof resultado === 'string') {
    console.log(resultado);
} else {
    console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
    console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
}