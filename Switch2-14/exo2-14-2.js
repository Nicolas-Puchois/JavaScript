/**
 * Réécrire le "if" dans un "switch"
importance: 4

Réécrivez le code ci-dessous en utilisant une seule instruction switch :

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
 */

'use strict';

let a = +prompt('a?', '');

switch(a){
    case 0:
        console.log(0);
        break;

    case 1:
        console.log(1);
        break;
        
    case 2 :
    case 3 : 
        console.log('2,3');
        break;
}