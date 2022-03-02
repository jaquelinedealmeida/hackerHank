// Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão na França), elaborar um programa que leia a hora no Brasil e informe a hora na França.

let horaBrasil = 11;
let minutosBRasil = 37;

let horaFranca = horaBrasil + 5;

// if(horaFranca > 24){
//   horaFranca = horaFranca - 24;
// }

horaFranca > 24 ? (horaFranca = horaFranca - 24) : horaFranca;

console.log(`Brasil: ${horaBrasil}:${minutosBRasil}
França: ${horaFranca}:${minutosBRasil}`);
