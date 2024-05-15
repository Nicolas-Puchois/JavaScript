/*
Une question à propos de "if"
importance: 5

Lesquelles de ces alertes vont s’exécuter ?

Quels seront les résultats des expressions à l’intérieur de if (...) ?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );*/

if (-1 || 0) alert( 'first' ); //--> va s'éxécuter car -1 est vrai
if (-1 && 0) alert( 'second' ); //--> ne s'éxécute pas car 0 est faux 
if (null || -1 && 1) alert( 'third' ); /*--> (-1&&1) renvoie 1 car les deux sont vrai, renvoie la dernière valeur.
(null||1)  est vrai car 1 est vrai. renvoie donc l'alerte*/