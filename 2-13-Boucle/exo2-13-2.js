/**
 * Quelles valeurs affiche la boucle while ?
importance: 4

A votre avis, quelles sont les valeurs affichées pour chaque boucle ? Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l’alert ou pas ?

    Le préfixe sous forme ++i :

let i = 0;
while (++i < 5) alert( i );

Le postfixe sous forme i++ :

let i = 0;
while (i++ < 5) alert( i );
 */
'use strict';



let i = 0;
while (++i < 5) alert( i );

// la valeur afficher est de 1 à4 car on increment de 1 puis on affiche la nouvelle valeur 


let i = 0;
while (i++ < 5) alert( i );

// la valeur afficher est de 1 à 5 car on increment de 1 puis on affiche l'ancienne valeur 