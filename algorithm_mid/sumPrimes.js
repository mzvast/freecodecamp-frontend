/**
 * Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
 */

function sumPrimes(num) {
  function checkPrime(n) {
    for(var i=2;i<n;i++){
      if (n%i === 0) {
        return false;
      }
    }
    return true;
  }

  var sum = 0;
  for(var i=2;i<=num;i++){
    if(checkPrime(i)){
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(10))
console.log(sumPrimes(977))