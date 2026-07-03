const prompt = require('prompt-sync')();

try {
  let nome = prompt('Digite o nome do usuário:');

  if (nome === null || nome.trim() === '') {
    throw new Error('Nome não foi digitado!');
  }

  let nota1Str = prompt('Digite a primeira nota:');
  let nota2Str = prompt('Digite a segunda nota:');
  let nota3Str = prompt('Digite a terceira nota:');

  if (nota1Str === null || nota1Str.trim() === '') {
    throw new Error('A primeira nota não foi digitada!');
  }

  if (nota2Str === null || nota2Str.trim() === '') {
    throw new Error('A segunda nota não foi digitada!');
  }

  if (nota3Str === null || nota3Str.trim() === '') {
    throw new Error('A terceira nota não foi digitada!');
  }

  let nota1 = Number(nota1Str);
  let nota2 = Number(nota2Str);
  let nota3 = Number(nota3Str);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    throw new Error('Notas inválidas! Digite apenas números.');
  }

  if (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    nota3 < 0 ||
    nota3 > 10
  ) {
    throw new Error('Notas devem estar entre 0 e 10!');
  }

  let media = (nota1 + nota2 + nota3) / 3;
  let maiorNota = Math.max(nota1, nota2, nota3);
  let menorNota = Math.min(nota1, nota2, nota3);

  console.log('Nome: ' + nome);
  console.log('Maior nota: ' + maiorNota);
  console.log('Menor nota: ' + menorNota);
  console.log('Média: ' + media.toFixed(2));

  if (media >= 7) {
    console.log('APROVADO!');
  } else if (media >= 5) {
    console.log('RECUPERAÇÃO');
  } else {
    console.log('REPROVADO!');
  }
} catch (erro) {
  console.error('ERRO: ' + erro.message);
}
