let fs = require("fs");
let data;

if (!process.argv[2]) {
  console.log("Aucun fichier de données renseigné");
  return;
}

try {
  data = fs.readFileSync(process.argv[2], "utf8"); //Throw en cas d'erreur (donc il faut catch)
} catch (error) {
  console.log("Le fichier renseigné déclanche les erreurs suivantes :");
  console.error(error);
  return;
}

console.log(data); //Le contenu du fichier est présent dans data
data = data
  .split(" ")
  .map((data) => (!isNaN(Number(data)) ? Number(data) : null))
  .filter(Boolean);

if (data.length < 1) {
  console.log("Aucun nombre dans le fichier de données renseigné");
  return;
}

// Merge sort
const mergeSort = (data) => {
  let run = 0;
  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  };

  const sort = (data) => {
    run++;
    if (data.length < 2) {
      return data;
    }
    let middle = Math.floor(data.length / 2);
    let left = data.slice(0, middle);
    let right = data.slice(middle, data.length);
    return merge(sort(left), sort(right));
  };
  data = sort(data);
  console.log(`Tri fusion : ${run} comparaisons`);
  console.log("-------------------------------------");
  return data;
};

// Odd-even transposition sort
const oddEvenTranspSort = (data) => {
  let run = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      run++;
      if (data[j] > data[j + 1]) {
        let tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
      j++;
    }
    for (let k = 0; k < data.length; k++) {
      if (data[k] > data[k + 1]) {
        let tmp = data[k];
        data[k] = data[k + 1];
        data[k + 1] = tmp;
      }
      k++;
    }
  }
  console.log(`Tri pair-impair : ${run} comparaisons`);
  console.log("-------------------------------------");
  return data;
};

// Comb sort
const combSort = (data) => {
  let run = 0;
  let interval = data.length;
  let exchange = true;
  while (interval > 1 || exchange === true) {
    interval = interval / 1.3;
    if (interval < 1) {
      interval = 1;
    }
    let i = 0;
    exchange = false;

    while (i < data.length - interval) {
      run++;
      if (data[i] > data[i + interval]) {
        let tmp = data[i];
        data[i] = data[i + interval];
        data[i + interval] = tmp;
        exchange = true;
      }
      i++;
    }
  }

  console.log(`Tri peigne : ${run} comparaisons`);
  console.log("------------------------------------");
  return data;
};

// Run
console.log("=====================================");
copy = data.slice();
console.log(mergeSort(copy));
console.log("=====================================");
copy = data.slice();
console.log(oddEvenTranspSort(copy));
console.log("=====================================");
copy = data.slice();
console.log(combSort(copy));
console.log("=====================================");
