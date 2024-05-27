/*
Select all diagonal cells
importance: 5

Write the code to paint all diagonal table cells in red.

You’ll need to get all diagonal <td> from the <table> and paint them using the code:

// td should be the reference to the table cell
td.style.backgroundColor = 'red';
*/
let td;

for (let i = 1; i <= HTMLTableRowElement.length; i++){
    td[i] = table.rows[i].cells[i];
    td.style.backgroundColor = 'red';
}