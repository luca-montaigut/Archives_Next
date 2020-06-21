function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numberToFind = getRandomIntInclusive(1, 100);
console.log(numberToFind);

for (let i = 0; i < 10; i++) {
  var proposition = prompt("Proposez un chiffre");
  if (proposition == numberToFind) {
    console.log("Bravo champion");
    break;
  } else if (proposition > numberToFind) {
    console.log("Trop grand, essaye encore");
  } else if (proposition < numberToFind) {
    console.log("Trop petit, essaye encore");
  }
}

if (proposition != numberToFind) {
  console.log("Perdu !");
}
