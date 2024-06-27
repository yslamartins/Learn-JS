/*2. Crie uma função que calcule a média de gastos de uma pessoa, 
    levando em consideração os pontos abaixo:

    1. Reaproveite a função separada que você criou no exercício anterior para calcular média.
    2. Retorne o padrão de vida da pessoa com base no gasto mensal dela:
        - Padrão de vida baixo: gasto médio mensal menor ou igual a 1500.
        - Padrão de vida médio: gasto médio mensal maior que 1500 e menor ou igual a
            6000.
        - Padrão de vida alto: gasto médio mensal maior que 6000.
    4. Será informado 3 valores para realizar o calculo
*/
function calcularMedia(padroes) {
  const { gasto1, gasto2, gasto3 } = padroes;
  const media = (gasto1 + gasto2 + gasto3) / 3;
  return media;
}
function padrao(gasto1, gasto2, gasto3) {
  const media = calcularMedia({ gasto1, gasto2, gasto3 });
  let padraodevida;
  if (media <= 1500) {
    padraodevida = "Seu padrão de vida é baixo";
  } else if (media > 1500 && media <= 6000) {
    padraodevida = "Seu padrão de vida é médio";
  } else {
    padraodevida = "Tá podendo ein?";
  }
  return {
    media: media.toFixed(2),
    padrao: padraodevida,
  };
}
const resultado2 = padrao(10, 700, 800);
console.log(
  `Média de gastos: ${resultado2.media}, Pnaadrão de vida: ${resultado2.padrao}`
);
