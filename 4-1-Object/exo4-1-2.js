/*
Vérifier le vide
importance: 5

Ecrivez la fonction isEmpty(obj) qui renvoie true si l’objet n’a pas de propriétés, sinon false.

Devrait fonctionner comme ça :
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/

'use strict';

 alert(isEmpty(name));

let name = 'Boby';

alert (isEmpty(name));

// correction :
function isEmpty(obj) {
    for (let key in obj) {
      // si la boucle a commencé, il y a une propriété
      return false;
    }
    return true;
  }