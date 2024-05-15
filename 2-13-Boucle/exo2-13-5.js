/**
 * Remplacer "for" par "while"
importance: 5

Réécrivez le code en modifiant la boucle for en while sans modifier son comportement (la sortie doit rester la même).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
 */

let i=0;

while (i < 3){
  console.log( `number ${i}!` );
  i++;
}