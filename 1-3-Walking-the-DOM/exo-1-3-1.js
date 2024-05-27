/*

DOM children
importance: 5

Look at this page:

<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>

For each of the following, give at least one way of how to access them:

    The <div> DOM node?             --> FirstElementChild.body
    The <ul> DOM node?              --> nextElementSibling.div
    The second <li> (with Pete)?    --> children[1].ul
*/

/*  correction

There are many ways, for instance:

The <div> DOM node:

document.body.firstElementChild
// or
document.body.children[0]
// or (the first node is space, so we take 2nd)
document.body.childNodes[1]

The <ul> DOM node:

document.body.lastElementChild
// or
document.body.children[1]

The second <li> (with Pete):

// get <ul>, and then get its last element child
document.body.lastElementChild.lastElementChild
*/