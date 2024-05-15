/*Check the login 
importance: 3

Écrivez le code qui demande une connexion avec prompt.

Si le visiteur entre "Admin", puis prompt pour un mot de passe, si l’entrée est une ligne vide ou Esc – affichez “Canceled”, s’il s’agit d’une autre chaîne de caractères – alors affichez “I don’t know you”.

Le mot de passe est vérifié comme suit :

    S’il est égal à “TheMaster”, alors affichez “Welcome!”,
    Une autre chaînede caractères – affichez “Wrong password”,
    Pour une chaîne de caractères vide ou une entrée annulée, affichez “Canceled”.
*/

let login = prompt("Nom d'utilisateur","");
let password = prompt("Mot de passe","");



if(login == "Admin"){
    if(password == TheMaster){
        alert("Welcome!");
    }
    else if(password){
        alert("Wrong password")
    }
    else if (password || null){
        alert("Canceled");
    }
}
else if(login || null){
    alert("I don't know you");
}
else{
    alert("Canceled");
}



//correction : 

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
