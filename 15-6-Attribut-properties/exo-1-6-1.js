/*
Get the attribute
importance: 5

Write the code to select the element with data-widget-name attribute from the document and to read its value.

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
     your code 
    </script>
    </body>
    </html>
*/

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    alert(elem.GetAttribute('data-widget-name'));
  </script>
</body>
</html>