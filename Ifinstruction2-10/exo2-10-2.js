/**
 * Le nom de JavaScript
importance: 2

En utilisant la construction if..else, écrivez le code qui demande : ‘Quel est le nom “officiel” de JavaScript?’

Si le visiteur entre “ECMAScript”, alors éditez une sortie “Bonne réponse !”, Sinon – retourne “Ne sait pas ? ECMAScript!”

 */

let realnamejs = prompt("What's the 'official' name of JavaScript?","");

if (realnamejs === 'ECMAScript'){
    alert("Right!");
}
else{
    alert("You don't know? ECMAScript");
}