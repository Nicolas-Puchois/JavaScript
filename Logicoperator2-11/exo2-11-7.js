/*Vérifiez à l'extérieur de la plage
importance: 3

Ecrivez une condition if pour vérifier que l’age n’est PAS compris entre 14 et 90 ans inclus.

Créez deux variantes: la première utilisant NOT !, La seconde – sans ce dernier.
*/

let checkage = +prompt("Veuillez entrer votre age","");

if (checkage < 14 || checkage > 90){                              
    alert("Vous n'avez pas le bonne age");
}