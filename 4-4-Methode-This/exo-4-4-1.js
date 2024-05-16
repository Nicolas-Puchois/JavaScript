/**
 * Utilisation de "this" dans le littéral d'objet
importance: 5

Ici, la fonction makeUser renvoie un objet.

Quel est le résultat de l’accès à sa ref ? Pourquoi ?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Quel est le résultat ?
 */

/*
 une erreur car lors de l'"alert", on appel la propriété ref qui prend la valeur name.
 or le 'This', qui est à l'interieur de makeUser, est de type undifined car elle est appelé en tant
 que fonction est donc ne change pas de valeur.
*/


