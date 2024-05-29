/*
hy does "aaa" remain?
importance: 1

In the example below, the call table.remove() removes the table from the document.

But if you run it, you can see that the text "aaa" is still visible.

Why does that happen?

<table id="table">
  aaa
  <tr>
    <td>Test</td>
  </tr>
</table>

<script>
  alert(table); // the table, as it should be

  table.remove();
  // why there's still "aaa" in the document?
</script>
*/

/* because 'aaa' is not in the table.*/