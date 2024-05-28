/*
Tag in comment
importance: 3

What does this code show?

<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // what's here?
</script>
*/

/* cela affiche body car on affiche seulement la donnée en commentaire
BODY */