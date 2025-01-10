function countPrimeNumbers() {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

const startTime = performance.now();
const numberOfPrimes = countPrimeNumbers();
const endTime = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    endTime - startTime
  } milliseconds.`
);
