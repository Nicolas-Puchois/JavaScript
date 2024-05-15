/**
 * Fonction pow(x,n)
importance: 4

Ecrivez une fonction pow(x, n) qui renvoie x à la puissance n. Ou, autrement dit, 
multiplie x par lui-même n fois et renvoie le résultat.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Créez une page Web qui demande (prompt)x et n, puis affiche le résultat de pow(x, n).

Exécuter la démo

P.S. Dans cette tâche, la fonction ne doit prendre en charge que les valeurs naturelles de n : entiers supérieurs à 1.
 * 
 * 
 */

let x = +prompt("Veuillez entrer un nombre","");
let n = +prompt("Veuillez entrer un nombre","");
function pow(x, n) { 
    if(x < 1){
        return("Entrer un nombre supérieur à 0");
    } 
    return(x**n);
}

pow(x,n)