/*
createTextNode vs innerHTML vs textContent
importance: 5

We have an empty DOM element elem and a string text.

Which of these 3 commands will do exactly the same?

    elem.append(document.createTextNode(text))
    elem.innerHTML = text
    elem.textContent = text

*/

/* its 1 and 3  because the 'append' and 'textContent' will not take 
tags and only send the text without style modification*/