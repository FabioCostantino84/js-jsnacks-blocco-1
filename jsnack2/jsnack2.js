/* 
Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

# tools:
- const/let
- prompt
- if/else
- console log
*/

// type first word
let firstWord = prompt('type your name');

// type second word
let secondWord = prompt('type your surname');

// check which is the shortest word
const firstAmount = firstWord.length;

const secondAmount = secondWord.length;

//print in console
if (firstAmount < secondAmount) {
    console.log(firstAmount, 'parola corta');
    console.log(secondAmount, 'parola lunga');
    
} else if (firstAmount > secondAmount) {
    console.log(secondAmount, 'parola corta');
    console.log(firstAmount, 'parola lunga');
  
} else (firstAmount == secondAmount); {
    console.log('le parole hanno la stessa lunghezza');
}