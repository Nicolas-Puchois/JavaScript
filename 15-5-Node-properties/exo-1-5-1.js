/*
Count descendants
importance: 5

There’s a tree structured as nested ul/li.

Write the code that for each <li> shows:

    What’s the text inside it (without the subtree)
    The number of nested <li> – all descendants, including the deeply nested ones.
*/
    let text = document.querySelectorAll('body');
    alert(document.textContent(text))

// correction
/*
<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html>
*/