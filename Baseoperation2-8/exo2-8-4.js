/*Corrigez l'addition
importance: 5

Voici un code qui demande à l’utilisateur deux nombres et affiche leur somme.

Cela ne fonctionne pas correctement. La sortie dans l’exemple ci-dessous est 12 (pour les valeurs d’invite par défaut).

Pourquoi ? Réparez-le. Le résultat doit être 3.*/


/*
original                                        answer
let a = prompt("First number?", 1);         |   let a = +prompt("First number?", 1); 
let b = prompt("Second number?", 2);        |   let b = +prompt("Second number?", 2);   
                                            |
alert(a + b); //12                          |   alert(a + b); //3    
*/