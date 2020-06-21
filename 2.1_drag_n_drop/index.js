const player = {
  name: "Sirosse",
  race: "Paladin",
  hp: 8,
  hpMax: 8,
  mana: 130,
  manaMax: 130,
  attack: 4,
};

const diplayPlayer = () => {
  document.getElementById("name").innerHTML = player.name;
  document.getElementById("race").innerHTML = player.race;
  document.querySelector(".hp").innerHTML =
    player.hp + " / " + player.hpMax + " ";
  document.querySelector(".mana span").innerHTML =
    player.mana + " / " + player.manaMax + " ";
  document.getElementsByTagName("b")[0].innerHTML = player.attack + " ";
};

const getValues = (e) => {
  e.preventDefault();
  let newName = document.getElementById("nameForm").value;
  let newRace = document.getElementById("raceForm").value;
  let newHp = document.getElementById("hpForm").value;
  let newMana = document.getElementById("manaForm").value;
  let newAttack = document.getElementById("attackForm").value;

  if (newName == "") {
    newName = player.name;
  }

  if (newRace == "") {
    newRace = player.race;
  }

  if (newHp == "") {
    newHp = player.hp;
  }

  if (newMana == "") {
    newMana = player.mana;
  }

  if (newAttack == "") {
    newAttack = player.attack;
  }

  if (isNaN(newHp) || isNaN(newMana) || isNaN(newAttack)) {
    alert("Please enter a number");
    return false;
  }

  if (newHp <= 0 || newMana <= 0 || newAttack <= 0) {
    alert("Please enter valid value");
    return false;
  }

  changeStats(newName, newRace, newHp, newMana, newAttack);
};

const changeStats = (newName, newRace, newHp, newMana, newAttack) => {
  player.name = newName;
  player.race = newRace;
  player.hp = newHp;
  player.hpMax = newHp;
  player.mana = newMana;
  player.manaMax = newMana;
  player.attack = newAttack;

  diplayPlayer();
};

diplayPlayer();
document.getElementById("submit").addEventListener("click", getValues);

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

const moveMouse = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.transform = `translate(${x - 15}px, ${y - 25}px)`;
};
document.addEventListener("mousemove", moveMouse);

// DRAG AND DROP
let hold = false;
let initialX;
let initialY;
let currentX = 0;
let currentY = 0;
let moveX;
let moveY;

window.addEventListener("mousedown", () => {
  hold = true;
});

window.addEventListener("mouseup", () => {
  hold = false;
});

const img = document.querySelector("img");

const grabImg = (e) => {
  e.preventDefault();
  cursor.classList = "";
  cursor.classList += "grabbing";
  console.log("click");
  console.log(e);
  initialX = e.clientX - currentX;
  initialY = e.clientY - currentY;
  document.addEventListener("mousemove", moveImg);
};

const moveImg = (e) => {
  e.preventDefault();
  if (hold) {
    cursor.classList = "";
    cursor.classList += "grabbing";
    moveX = e.clientX - initialX;
    moveY = e.clientY - initialY;
    currentX = moveX;
    currentY = moveY;

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
};

const ungrabImg = (e) => {
  e.preventDefault();
  cursor.classList = "";
  cursor.classList += "grab";
  document.removeEventListener("mousemove", moveImg);
};

const cursorGrab = () => {
  cursor.classList = "";
  cursor.classList += "grab";
};

const cursorBack = () => {
  cursor.classList = "";
  cursor.classList += "cursor";
};

img.addEventListener("mouseover", cursorGrab);
img.addEventListener("mouseleave", cursorBack);
img.addEventListener("mousedown", grabImg);
img.addEventListener("mouseup", ungrabImg);
