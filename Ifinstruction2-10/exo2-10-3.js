/**
 * Réécrire 'if' en '?'
importance: 5

Réécrivez ce if en utilisant l’opérateur conditionnel '?' :

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
 */

'use strict';

let choosenumber = +prompt("Choisi un nombre","");

if (choosenumber > 0){
    alert("1");
}

else if (choosenumber < 0){
    alert("-1");
}
else{
    alert(0);
}
