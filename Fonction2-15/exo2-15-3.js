/*
Fonction min(a, b)
importance: 1

Ecrivez une fonction min(a, b) qui renvoie le plus petit des deux nombres a et b.

Par exemple :

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

*/


function min(a, b) {
    if(a < b){
        return a;
    }
    else{
        return b;
    }
}