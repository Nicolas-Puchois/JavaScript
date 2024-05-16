/*
Appel dans un contexte de tableau
importance: 5

Quel est le résultat ? Et pourquoi ?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
*/

/*
Ils sort la fonction car la fonction est la troisième valeur
*/