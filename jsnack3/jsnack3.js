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



let totalCalculation = 0;

for (let i = 0; i < 10; i++) {
    let typeNumber = Number(prompt ('scegli un numero'));
    //totalCalculation += typeNumber;
    totalCalculation = totalCalculation + typeNumber;
  }
console.log(totalCalculation);