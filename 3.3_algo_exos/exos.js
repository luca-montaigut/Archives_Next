// EXERCICE 1
const exo1 = (data, k) => {
  let run = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      run++;
      if (data[i] + data[j] == k && data[i] !== data[j]) {
        console.log("run =", run);
        return true;
      }
    }
  }
  console.log("run =", run);
  return false;
};

console.log("================================");
console.log("Exercice 1 : deux boucles");
console.log(exo1([10, 15, 3, 7], 17));
console.log(exo1([1, 8, 10, 21], 19));

// EXERCICE 2
const exo2 = (data) => {
  let run = 0;
  let sunsetView = 0;
  for (let i = 0; i < data.length; i++) {
    let hasView = 1;
    for (let j = i + 1; j < data.length; j++) {
      run++;
      if (data[i] <= data[j]) {
        hasView = 0;
      }
    }
    sunsetView += hasView;
  }
  console.log("run =", run);
  return sunsetView;
};

console.log("================================");
console.log("Exercice 2 : deux boucles");
console.log(exo2([3, 7, 8, 3, 6, 1]));
console.log(exo2([1, 4, 5, 8]));

// EXERCICE 3 & 5
const exo3 = (data, k) => {
  let run = 0;
  let searchValues = new Set();
  searchValues.add(k - data[0]);
  for (let i = 1, length = data.length; i < length; i++) {
    run++;
    let searchVal = k - data[i];
    if (searchValues.has(data[i])) {
      console.log("run =", run);
      return true;
    } else {
      searchValues.add(searchVal);
    }
  }

  console.log("run =", run);
  return false;
};

// The set.has() method has a run-time complexity of just O(1), meaning that the overall time complexity of this function is linear.
// Version énervée : const exo3 = (data, k) => data.some((set => n => set.has(n) || !set.add(k - n))(new Set));

console.log("================================");
console.log("Exercice 3 & 5 : un seul passage");
console.log(exo3([10, 15, 3, 7], 17));
console.log(exo3([1, 8, 10, 21], 19));

// EXERCICE 4 & 6
const exo4 = (data) => {
  let run = 0;
  let count = 1;
  let max = data[data.length - 1];
  for (let j = data.length - 2; j >= 0; j--) {
    run++;
    if (data[j] > max) {
      max = data[j];

      count++;
    }
  }
  console.log("run =", run);
  return count;
};

console.log("================================");
console.log("Exercice 4 & 6 : un seul passage");
console.log(exo4([3, 7, 8, 3, 6, 1]));
console.log(exo4([1, 4, 5, 8]));

