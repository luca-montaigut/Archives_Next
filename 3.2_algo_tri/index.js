let fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data); //Le contenu du fichier est présent dans data
  data = data.split(" ").map((data) => Number(data));

  // Bubble sort
  const bubbleSort = (data) => {
    let run = 0;
    for (let i = data.length - 1; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        run++;
        if (data[j] > data[j + 1]) {
          let tmp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = tmp;
        }
      }
    }
    console.log(`Tri à bulle: ${run} comparaisons`);
    return data;
  };

  // Insertion sort
  const insertionSort = (data) => {
    let run = 0;
    for (let i = 1; i < data.length; i++) {
      let tmp = data[i];
      let j = i;
      while (j > 0 && data[j - 1] > tmp) {
        run++;
        data[j] = data[j - 1];
        j = j - 1;
      }
      data[j] = tmp;
    }
    console.log(`Tri par insertion: ${run} comparaisons`);
    return data;
  };

  // Select sort
  const selectSort = (data) => {
    let run = 0;
    for (let i = 0; i < data.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < data.length; j++) {
        run++;
        if (data[j] < data[min]) {
          min = j;
        }
      }
      if (min != i) {
        let tmp = data[i];
        data[i] = data[min];
        data[min] = tmp;
      }
    }

    console.log(`Tri par selection: ${run} comparaisons`);
    return data;
  };

  // Quick sort
  const quickSort = (data) => {
    let run = 0;
    const sort = (data) => {
      if (data.length <= 1) return data;
      let pivot = data[data.length - 1];
      let left = [];
      let right = [];
      for (let i = 0; i < data.length - 1; i++) {
        if (data[i] < pivot) {
          left.push(data[i]);
        } else {
          right.push(data[i]);
        }
        run++;
      }
      return [...sort(left), pivot, ...sort(right)];
    };
    data = sort(data);
    console.log(`Tri rapide: ${run} comparaisons`);
    return data;
  };

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
    console.log(`Tri fusion: ${run} comparaisons`);
    return data;
  };

  // Run
  let copy = data.slice();
  console.log(bubbleSort(copy));
  copy = data.slice();
  console.log(insertionSort(copy));
  copy = data.slice();
  console.log(selectSort(copy));
  copy = data.slice();
  console.log(quickSort(copy));
  copy = data.slice();
  console.log(mergeSort(copy));
});
