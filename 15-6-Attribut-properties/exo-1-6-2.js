/*
Make external links orange
importance: 3

Make all external links orange by altering their style property.

A link is external if:

    Its href has :// in it
    But doesn’t start with http://internal.com.
*/

let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // no attribute

  if (!href.includes('://')) continue; // no protocol

  if (href.startsWith('http://internal.com')) continue; // internal

  link.style.color = 'orange';
}