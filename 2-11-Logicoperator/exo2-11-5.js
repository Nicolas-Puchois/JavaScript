/**
 * Le résultat de OR AND OR
importance: 5

Quel sera le résultat ?

alert( null || 2 && 3 || 4 );
 */

alert( null || 2 && 3 || 4); /*--> on commance par "AND", on garde la valeur 3 car les deux sont vrai donc on prend la 
dernière valeur vrai. on fait les "OR", la valeur renvoyé est 3 car première valeur vrai.*/