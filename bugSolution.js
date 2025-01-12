function foo(x) {
  if (x === null || Number.isNaN(x)) {
    return 0; 
  } else {
    return x + 1; 
  }
}
console.log(foo(null)); //Output: 0
console.log(foo(NaN)); //Output: 0