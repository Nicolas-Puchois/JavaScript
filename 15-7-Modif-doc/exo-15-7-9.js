/*
Insert the HTML in the list
importance: 5

Write the code to insert <li>2</li><li>3</li> between two <li> here:

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
*/

function insert(){
    for (let i = 2; i < 4; i++){
    li.insertAdjacentElement('before', '<li>' + [i] + '</li>');
    }
}
/* correction*/

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');