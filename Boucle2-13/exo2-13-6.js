/**
 Répéter jusqu'à ce que l'entrée soit correcte
  
importance: 5

Ecrivez une boucle qui demande un nombre supérieur à 100. Si le visiteur saisit un autre numéro, 
demandez-lui de le saisir à nouveau.

La boucle doit demander un numéro jusqu’à ce que le visiteur saisisse un nombre supérieur à 100 ou annule 
l’entrée/entre une ligne vide.

Ici, nous pouvons supposer que le visiteur ne saisit que des chiffres. 
Il n’est pas nécessaire de mettre en œuvre un traitement spécial pour une entrée non numérique dans cette tâche.
  */




do{
    let number = +prompt("Veuillez entrer un nombre plus grand que 100","");
}while (number <= 100);