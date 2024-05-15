/*
Comparaisons
importance: 5

Quel sera le résultat pour les expressions suivantes :

5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"*/


5 > 4       // --> true car 5 plus grand que 4
"apple" > "pineapple"   // --> false car "a" a un index plus petit que "p"
"2" > "12"  // --> true car "2" a un index supérieur à "1"
undefined == null   // --> true car undifined est uniquement égal à null
undefined === null  // --> false car undifined n'est pas du meme type que null
null == "\n0\n" // --> false car null n'est égal à undifined
null === +"\n0\n"   // --> false car pas du meme type