function foo(x){
  if (x == null) {
    return 0; //This will not work as expected if x is NaN
  } else {
    return x + 1; 
  }
}
console.log(foo(null)); //Output: 0
console.log(foo(NaN)); //Output: NaN, expected 0