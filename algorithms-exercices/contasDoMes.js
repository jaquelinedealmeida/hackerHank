// Desenvolva um algoritmo que recebe todas as suas contas do mês, faça a soma dos valores e diminua do seu salário. Como saída mostre o salário, o total de gastos e o quanto irá sobrar no final do mês.

let salario = 3000;
let gastos = {
  'Aluguel' : 800,
  'Luz' : 70,
  'Água' : 30,
  'Internet' : 90,
  'Cartão de crédito' : 1000,
};

// console.log(gastos.Aluguel);

const total = Object.values(gastos).reduce((a, b) => a + b);

console.log(`Salário: R$${salario}
Total de gastos: R$${total}
Restante: R$${salario - total}`);