/*
Réécrivez la fonction en utilisant '?' ou '||'
importance: 4

La fonction suivante renvoie true si le paramètre age est supérieur à 18.

Sinon, il demande une confirmation et renvoie le résultat.


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}


Réécrivez-le, pour effectuer la même chose, mais sans if, et en une seule ligne.

Faites deux variantes de checkAge :

    En utilisant un opérateur point d’interrogation ?
    En utilisant OU ||

*/


function CheckAge(age){ age > 18 ? true : confirm('Did parents allow you?'); }

function CheckAge(age){ return(age > 18) || confirm('Did parents allow you?'); }