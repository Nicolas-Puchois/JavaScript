/**
 * 
 * 
 * Multipliez les valeurs de propriétés numériques par 2
importance: 3

Créez une fonction multiplyNumeric(obj) qui multiplie toutes les valeurs de propriétés numériques de obj par 2.

Par exemple :

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Veuillez noter que multiplyNumeric n’a pas besoin de retourner quoi que ce soit. Il devrait modifier l’objet en place.

P.S. Utilisez typeof pour rechercher un number ici.
 */

'use strict';

  
function multiplyNumeric(){
    if(typeof(obj.key) === Number){
        for (let key in obj){
            obj.key *= 2
        }
    }
}



// correction :

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }