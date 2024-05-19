/**
 Un sous-tableau maximal
importance: 2

L’entrée est un tableau de nombres, par exemple arr = [1, -2, 3, 4, -9, 6].

La tâche est la suivante : trouver le sous-tableau contigu de arr avec la somme maximale des items.

Écrire la fonction getMaxSubSum(arr) qui retournera cette somme.

Par exemple :

getMaxSubSum([-1, 2, 3, -9]) == 5 (la somme des éléments en surbrillance)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (prend tout)

Si tous les éléments sont négatifs, cela signifie que nous n’en prenons aucun (le sous-tableau est vide), la somme est donc zéro :

getMaxSubSum([-1, -2, -3]) = 0

S’il vous plaît essayez de penser à une solution rapide : O(n2) ou même à O(n) si vous le pouvez. 
 */

let arr = [1, -2, 3, 4, -9, 6];

let getMaxSubSum = 0;

for (let nombre of arr){

}

// solution 1 :

function getMaxSubSum(arr) {
    let maxSum = 0; // si on ne prend aucun élément, zéro sera retourné
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100


  // solution 2 :

  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // pour chaque élément d'arr
      partialSum += item; // l'ajouter à partialSum
      maxSum = Math.max(maxSum, partialSum); // mémorise le maximum
      if (partialSum < 0) partialSum = 0; // zéro si négatif
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0