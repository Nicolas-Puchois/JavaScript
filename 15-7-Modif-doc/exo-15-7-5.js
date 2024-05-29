/*
Create a tree from the object
importance: 5

Write a function createTree that creates a nested ul/li list from the nested object.

For instance:

let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

The syntax:

let container = document.getElementById('container');
createTree(container, data); // creates the tree in the container

The result (tree) should look like this:

Choose one of two ways of solving this task:

    Create the HTML for the tree and then assign to container.innerHTML.
    Create tree nodes and append with DOM methods.

Would be great if you could do both.

P.S. The tree should not have “extra” elements like empty <ul></ul> for the leaves.
*/

<script>
let lis = document.getElementsByTagName('li');

for (let li of lis) {
  // get the count of all <li> below this <li>
  let descendantsCount = li.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  // add directly to the text node (append to the text)
  li.firstChild.data += ' [' + descendantsCount + ']';
}
</script>
