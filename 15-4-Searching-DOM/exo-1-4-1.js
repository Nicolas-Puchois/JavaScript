/*
Search for elements
importance: 4

Here’s the document with the table and form.

How to find?…

 1.   The table with id="age-table".
 2.   All label elements inside that table (there should be 3 of them).
 3.   The first td in that table (with the word “Age”).
 4.   The form with name="search".
 5.   The first input in that form.
 6.   The last input in that form.
*/

/*1.*/  document.getElementById("age-table");
/*2.*/  document.getElementsByTagName("label");
/*3.*/  document.querySelector('td');
/*4.*/  document.getElementsByName("search");/* correction -->*/
        document.querySelector('form[name="search"]')
/*5.*/  document.firstElementChild.getElementsByTagName("Input") /* correction -->*/
        form.getElementsByTagName('input')[0]
/*6.*/  document.lastElementChild.getElementsByTagName("Input")/* correction -->*/
        let inputs = form.querySelectorAll('input') // find all inputs
        inputs[inputs.length-1] // take the last one