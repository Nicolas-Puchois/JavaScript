/**
 * Réécrire le "switch" dans un "if"
importance: 5

Écrivez le code en utilisant if..else qui correspondrait au switch suivant :

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
 */

'use strict';

if(browser === 'Edge'){
    console.log("You've got the Edge!");
}
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    console.log('Okay we support these browsers too');
}
else{
    console.log('We hope that this page looks ok!');
}