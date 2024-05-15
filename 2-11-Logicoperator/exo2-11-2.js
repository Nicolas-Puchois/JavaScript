/* Quel est le résultat des alertes OR ?
importance: 3

Qu’est-ce que le code ci-dessous va sortir ?

alert( alert(1) || 2 || alert(3) );*/

alert( alert(1) || 2 || alert(3));// --> pop-up avec écris "1" puis 2 car exécution de l'alert 1 puis 2 car première valeur vrai
