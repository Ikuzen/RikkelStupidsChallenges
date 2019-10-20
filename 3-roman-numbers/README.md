# 3 - Roman numbers

Create a function `arabicToRoman(nb)` which takes an arabic number and convert it to roman.

| Roman symbol  | Arabic Value  |
|---            |---            |
| I             | 1             |
| V             | 5             |
| X             | 10            |
| L             | 50            |
| C             | 100           |
| D             | 500           |
| M             | 1000          |

Examples:

```code
Example 3: Arabic -> Roman for 1..10
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
-> I, II, III, IV, V, VI, VII, VIII, IX, X

Example 4: Arabic -> Roman for 10..100
11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 40, 50, 69, 99, 100
-> XI, XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXV, XL, L, LXIX, XCIX, C

Example 5: Arabic -> Roman for 101..3499
101, 150, 200, 400, 500, 666, 1000, 1444, 1666, 1999, 2000, 2009, 3000, 3499
-> CI, CL, CC, CD, D, DCLXVI, M, MCDXLIV, MDCLXVI, MCMXCIX, MM, MMIX, MMM,
       MMMCDXCIX
```