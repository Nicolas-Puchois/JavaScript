/**
 * 
 * Réécrire avec les fonctions fléchées

Remplacez les expressions de fonction par des fonctions fléchées dans le code ci-dessous :

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
 */

let ask(question, yes, no) => {
    if(confirm(question)){ alert("You agreed."); 
 }
 else{
     alert("You canceled the execution.");
 }
}

ask()

// correction

let ask = (question, yes, no) => {
    (confirm(question)) ? yes ():
    no ();
    return ;
    };
    ask ("Do you agree?",
    () => alert ("You agreed."),
    () => alert ("You canceled the execution."));