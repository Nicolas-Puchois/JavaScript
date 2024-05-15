/**
 * Vérifiez la plage entre
importance: 3

Ecrivez une condition "if" pour vérifier que l’age est compris entre 14 et 90 ans inclus.

“Inclus” signifie que l’age peut atteindre les 14 ou 90 ans.

 */


let checkage = +prompt("Veuillez entrer votre age","");

if (14 <= checkage <= 90){                              // | correction : if(checkage >= 14 && age <= 90)
    alert("Vous avez le bonne age");
}
