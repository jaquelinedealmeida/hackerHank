let alturas = [];
function criaPessoa (num) {
  for(index = 0; index < num; index += 1){
    alturas.push(parseFloat((Math.random() * (2.5 - 1.3) + 1.3).toFixed(2)));
  }
};

criaPessoa(1000);

// console.log(alturas);

let soma = 0;
alturas.forEach((altura) => soma += altura);
const media = (soma / alturas.length).toFixed(2);

let menorMedia = [];
alturas.forEach((altura) => {
  if(altura < media) menorMedia.push(altura);
});

console.log(`Menor altura: ${alturas.sort()[0]}
Maior altura: ${alturas.sort((a, b) => b - a)[0]}
Média: ${media}
Pessoas com altura menor que a média: ${menorMedia}`);

// - maior altura; ok
// - menor altura; ok
// - média das alturas; ok
// - pessoas com altura menor que a média ok


// console.log(((Math.random() * 2.5) + 1.3).toFixed(2));
