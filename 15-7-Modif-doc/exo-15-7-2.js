/*
Clear the element
importance: 5

Create a function clear(elem) that removes everything from the element.


<ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>

<script>
  function clear(elem) { 
  
  }

  clear(elem); // clears the list
</script>
*/


<script>
  function clear(elem) { 
    while(elem.firstChild){
      Element.firstChild.remove()
    }
  }

  clear(elem); // clears the list
</script>