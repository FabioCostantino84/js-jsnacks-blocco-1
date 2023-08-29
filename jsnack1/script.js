/* 

Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

# tools:
- prompt
- const/let
- for
- if/else
- console

*/

// enter the first number
let firstUserNumber = prompt('type dad age');

// enter the second number
let secondUserNumber = prompt('type mom age');

// check which of the two numbers is greater and print
if (firstUserNumber > secondUserNumber) {
    console.log(firstUserNumber, 'your father is older');
    
} else {
    console.log(secondUserNumber, 'your mom is older')
    
}