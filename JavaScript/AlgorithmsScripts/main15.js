// sum all odd Fibonacci numbers

function sumFibs(num) {
  let a = 1;
  let b = a;
  let c = 0;
  let sumOfOdds = a + b;

  while (num > c) {
    c = a + b;
    a = b;
    b = c;
    if (c % 2 !== 0 && c <= num) sumOfOdds += c;
  }
  return sumOfOdds;
}

console.log(sumFibs(1));
