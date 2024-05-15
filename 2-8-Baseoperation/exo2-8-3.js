/*Les conversions de type
importance: 5

Quels sont les résultats de ces expressions ?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
*/

"" + 1 + 0     // --> "10"
"" - 1 + 0     // --> -1
true + false    //    --> 1
6 / "3"    // --> 2
"2" * "3"     //  --> 6
4 + 5 + "px"    //    --> "9px"
"$" + 4 + 5    // --> "$45"
"4" - 2    // --> 2
"4px" - 2      // --> NaN
"  -9  " + 5     //   -->" -9  5"
"  -9  " - 5     //   --> -14
null + 1       // --> 1
undefined + 1    //   --> NaN
" \t \n" - 2     //   --> -2