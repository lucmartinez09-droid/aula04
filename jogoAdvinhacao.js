const prompt = require('prompt-sync')();

function jogarAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let palpite;
  let acertou = false;

  console.log('=== JOGO DE ADIVINHAÇÃO ===');
  console.log('Tente adivinhar o número entre 1 e 100!\n');

  while (!acertou) {
    palpite = prompt('Digite seu palpite (1-100): ');

    if (palpite === '' || palpite === null) {
      console.log('Jogo cancelado! O número era: ' + numeroSecreto);
      return;
    }

    palpite = Number(palpite);

    if (isNaN(palpite)) {
      console.log('Por favor, digite um número válido!\n');
      continue;
    }

    if (palpite < 1 || palpite > 100) {
      console.log('O número deve estar entre 1 e 100!\n');
      continue;
    }

    tentativas++;

    if (palpite > numeroSecreto) {
      console.log('Menor! Tente novamente.\n');
    } else if (palpite < numeroSecreto) {
      console.log('Maior! Tente novamente.\n');
    } else {
      acertou = true;
    }
  }

  const dataHoraFim = new Date();

  console.log('\n PARABÉNS, VOCÊ ACERTOU!');
  console.log(`Número secreto: ${numeroSecreto}`);
  console.log(`Quantidade de tentativas: ${tentativas}`);
  console.log(`Data/hora do término: ${dataHoraFim.toLocaleString('pt-BR')}`);
  console.log('=== RESULTADO FINAL ===');
}

jogarAdivinhacao();
