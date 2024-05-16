/**
 * Opérations de tableaux
importance: 5

Essayons 5 opérations de tableau.

    Créez un tableau styles avec les éléments “Jazz” et “Blues”.
    Ajoutez “Rock-n-Roll” à la fin.
    Remplacez la valeur au milieu par “Classiques”. Votre code pour trouver la valeur moyenne devrait fonctionner pour tous les tableaux de longueur impaire.
    Extrayez la première valeur du tableau et affichez-la.
    Ajoutez Rap et Reggae au tableau.

Le processus du tableau :

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
 */


let styles = ["jazz", "blues"];

styles.push("Rock-n-Roll");

styles[1]=("Classiques");

alert(fruits[0]);

styles.push("Rap" + Reggae);


// correction

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");