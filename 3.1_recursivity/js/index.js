const computeFactorialIt = (n) => {
  let accumulator = 1;
  for (let i = 1; i <= n; i++) {
    accumulator *= i;
  }
  return accumulator;
};

const computeFactorialRec = (n) => {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return n * computeFactorialRec(n - 1);
};

const computePowerIt = (n, p) => {
  power = n;
  for (let i = 1; i < p; i++) {
    n *= power;
  }
  return n;
};

const computePowerRec = (n, p) => {
  if (p === 0) {
    return 1;
  }
  return n * computePowerRec(n, p - 1);
};

const computePerfectSquareRoot = (n) => {
  const sqrt = (n, i) => {
    if (i * i > n) {
      return `${n} isn't a perfect square`;
    }
    if (i * i === n) {
      return i;
    }
    return sqrt(n, i + 1);
  };
  let i = 1;
  return sqrt(n, i);
};

const isPrimeNumber = (n) => {
  if (n <= 1) {
    return false;
  }

  let i = 2;
  const prime = (n, i) => {
    if (n === i) {
      return true;
    }
    if (n % i === 0) {
      return false;
    }
    return prime(n, i + 1);
  };

  return prime(n, i);
};

const findSupPrime = (n) => {
  if (isPrimeNumber(n)) {
    return n;
  }
  return findSupPrime(n + 1);
};

/*
const countValidQueens = (n) => {
  http://zanotti.univ-tln.fr/ALGO/I51/Reines.html
};
*/
