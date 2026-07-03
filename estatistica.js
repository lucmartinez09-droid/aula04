function estatisticas(...numeros) {
  let maiorValor = numeros[0];
  let menorValor = numeros[0];
  let somaTotal = 0;

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    somaTotal = somaTotal + numero;

    if (numero > maiorValor) {
      maiorValor = numero;
    }

    if (numero < menorValor) {
      menorValor = numero;
    }
  }

  const media = somaTotal / numeros.length;

  return {
    maiorValor,
    menorValor,
    media,
    somaTotal,
  };
}

// Exemplo de uso:
const resultado = estatisticas(10, 5, 8, 12, 3);
console.log(resultado);

console.log(estatisticas(100, 200, 50, 75));
