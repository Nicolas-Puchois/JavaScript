/* Quelles valeurs sont affichées par la boucle "for" ?
importance: 4

Pour chaque boucle, notez les valeurs qui vont s’afficher. Ensuite, comparez avec la réponse.

Les deux boucles alert les mêmes valeurs ou pas ?

    La forme postfix :

for (let i = 0; i < 5; i++) alert( i );

La forme préfix :

for (let i = 0; i < 5; ++i) alert( i );*/



for (let i = 0; i < 5; i++) alert( i );

// de 0 à 4 car on increment de 1 puis on remplace i par la nouvelle valeur a chaque fin de boucle


for (let i = 0; i < 5; ++i) alert( i );

// de 0 à 4 car on increment de 1 puis on remplace i par la nouvelle valeur a chaque fin de boucle