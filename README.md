# JavaScript Loose Equality and NaN Handling

This repository demonstrates a common JavaScript pitfall involving loose equality (`==`) and the handling of `NaN` (Not a Number).

The `bug.js` file shows a function that intends to return 0 if the input is null or NaN.  However, due to the limitations of loose equality, it only returns 0 for null, failing to handle NaN correctly.

The `bugSolution.js` file provides a corrected version that uses strict equality (`===`) and `Number.isNaN()` for reliable NaN handling.

This example highlights the importance of understanding JavaScript's type coercion rules and using strict equality whenever possible to avoid unexpected behavior.