/**
 * Constante en majuscule ?
 * 
 * 
importance: 4

Examinez le code suivant :

const birthday = '18.04.1982';

const age = someCode(birthday);

Ici, nous avons une constante birthday pour la date de naissance, ainsi que la constante age.

L’age est calculé à partir de birthday en utilisant someCode(), ce qui signifie un appel de fonction que nous n’avons pas encore expliqué (nous le ferons bientôt !), mais les détails n’ont pas d’importance ici, le fait est que l’age est calculé d’une manière ou d’une autre en fonction de la date de naissance birthday.

Serait-il juste d’utiliser des majuscules pour birthday? Pour age? Ou même pour les deux ?

const BIRTHDAY = '18.04.1982'; // mettre l'anniversaire en majuscule ?

const AGE = someCode(BIRTHDAY); // mettre l'âge en majuscule ?
 */

/*
les deux doivent être en minuscule afin car la "constante" 'AGE' n'est pas vraiment constante. Afin de mieux
voir on homogénéise les noms.

correction --> "Birthday" peut être en capital car constante en dur| "AGE" doit être garder en minuscule car variables

*/