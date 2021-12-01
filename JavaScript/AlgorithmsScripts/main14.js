// sum all primes;

let summation = 0;

function sumPrimes(num) {
  for (let i = 1; i <= num; i++) {
    let count = 0;
    for (let k = i; k > 0; k--) {
      if (i % k == 0) count++;
    }
    if (count == 2) summation += i;
  }
  return summation;
}

console.log(sumPrimes());
