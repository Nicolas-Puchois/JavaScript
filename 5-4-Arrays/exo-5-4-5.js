/*
Somme des nombres saisis
importance: 4

Écrivez la fonction sumInput() qui :

    Demande à l’utilisateur des valeurs utilisant prompt et stocke les valeurs dans le tableau.
    Finit de demander lorsque l’utilisateur entre une valeur non numérique, une chaîne vide ou appuie sur “Annuler”.
    Calcule et retourne la somme des éléments du tableau.

P.S. Un zéro 0 est un nombre valide, donc s’il vous plaît n’arrêtez pas l’entrée sur zéro.
*/

let sum = [];

let sumInput ={
    do{
        sumInput = +prompt("Entrer un chiffre", 0),
        sum = sumInput
    },while(sumInput != null || sumInput != undifined);
} 


// correction :

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // devrions-nous annuler ?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );