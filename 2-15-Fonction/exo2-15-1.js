/**
 * Est-ce que "else" est requis ?
importance: 4

La fonction suivante renvoie true si le paramètre age est supérieur à 18.

Sinon, il demande une confirmation et renvoie son résultat :

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

La fonction fonctionnera-t-elle différemment si else est supprimé ?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

Existe-t-il une différence dans le comportement de ces deux variantes ?
 */

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }


function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm('Did parents allow you?');
  }

/*
 1) Si le 'Else' est supprimer, la fonction reste la meme car si la condition "if" est fausse, le code est exécuter après la
    methode "if"


  2) il y a aucune différence, dans le second code, le "Else" est implicite
*/