/**
 * Extraire des nombres premiers
importance: 3

Un nombre entier supérieur à 1 est appelé un Nombre premier s’il ne peut être divisé sans reste par rien d’autre que 1 et lui-même.

En d’autres termes, n > 1 est un nombre premier s’il ne peut être divisé de manière égale par autre chose que 1 et n.

Par exemple, 5 est un nombre premier, car il ne peut pas être divisé sans reste par 2, 3 et 4.

Écrivez un code qui produit les nombres premiers dans l’intervall e 2 à n.

Pour n = 10, le résultat sera 2,3,5,7.

P.S. Le code devrait fonctionner pour n’importe quel n et aucune valeur fixe ne doit être codé en dur.

 * 
 * 
 */

let n = +prompt("Veuillez entrer le nombre de vérification",""); 
let startnumber = 2;

while (startnumber < n){
    if (startnumber % 2 !== 0 && startnumber % 3 !== 0  && startnumber % 5 !== 0){
        console.log(startnumber);
    }
    startnumber++
}



// correction :

//nextPrime:

let n = 10;

for (let i = 2; i <= n; i++) { // Pour chaque i...

  for (let j = 2; j < i; j++) { // cherche un diviseur ..
    if (i % j == 0) continue nextPrime; // pas un premier, on passe au prochain i
  }

  alert( i ); // un premier
}