/* 
Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

# tools:
- let/const
- for cicle
- prompt
- console log

*/


const typeNumbers = document.createElement('div');
const totals = document.createElement('h3');
let totalCalculation = 0;


for (let i = 0; i < 10; i++) {
  let typeNumber = Number(prompt('scegli un numero'));
  //totalCalculation += typeNumber;
  totalCalculation = totalCalculation + typeNumber;

  typeNumbers.innerHTML += `${typeNumber} + `;
  totals.innerHTML = `Totale = ${totalCalculation}`;
}
document.body.append(typeNumbers);
document.body.append(totals);
console.log(totalCalculation);