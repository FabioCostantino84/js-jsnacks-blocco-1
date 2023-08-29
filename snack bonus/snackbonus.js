/* 

Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

#tools:
- array
- prompt
- cicle for
- if/else
- .push

*/

let oddNumbers = []

for (let i = 0; i < 6; i++) {
    const typeNumber = Number(prompt('type a number'));

    if (typeNumber % 2 == 0) {
        oddNumbers.push(i);
            
    } /* else {
        alert('enter at least one odd number')
    } */

}

console.log(oddNumbers);
