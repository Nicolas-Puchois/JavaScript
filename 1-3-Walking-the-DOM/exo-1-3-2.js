/*
The sibling question
importance: 5

If elem – is an arbitrary DOM element node…

    1. Is it true that elem.lastChild.nextSibling is always null?  --> yes, because, there is nothing 
    after  last child (correct)

    2. Is it true that elem.children[0].previousSibling is always null ? --> yes, because, there is nothing 
    before last child (wrong)

    correction for 2 :
    No, wrong, because elem.children[0] is the first child among elements. 
    But there may exist non-element nodes before it. So previousSibling may be a text node.

*/
