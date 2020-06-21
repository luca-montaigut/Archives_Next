let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let age = document.getElementById("age");
let email = document.getElementById("email");
let confirmEmail = document.getElementById("confirmemail");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confimpassword");
let cgu = document.getElementById("cgu");
let inputs = [
  fname,
  lname,
  age,
  email,
  confirmEmail,
  password,
  confirmPassword,
  cgu,
];
let allInputsAreValids;

const isNotEmpty = (input) => {
  if (input.value == "") {
    input.nextElementSibling.innerHTML = `<br> Votre ${input.name} est manquant`;
    allInputsAreValids = false;
  }
};

const validName = (name) => {
  if (name.value.length <= 3) {
    name.nextElementSibling.innerHTML += `<br> Votre ${name.name} doit contenir au minimum 3 lettres`;
    allInputsAreValids = false;
  }
};

const isMajor = (input) => {
  if (Number(input.value) <= 18) {
    input.nextElementSibling.innerHTML += `<br> Vous devez être majeur`;
    allInputsAreValids = false;
  }
};

const validEmail = (email) => {
  const regexEmail = new RegExp(
    "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,3})$"
  );
  if (!email.value.match(regexEmail)) {
    email.nextElementSibling.innerHTML += `<br> Votre email doit contenir entre 8 et 30 lettres avec un @, un point et 2 ou 3 lettres après le point.`;
    allInputsAreValids = false;
  }
};

const validPassword = (password) => {
  const regexPassword = new RegExp(
    "(?=.{8,20}$)(?=.*\\d.*\\d)(?=.*[!@#$%^&*])(?=.*[\\s+]).*"
  );
  if (!password.value.match(regexPassword)) {
    password.nextElementSibling.innerHTML += `<br> Votre mot de passe doit contenir entre 8 et 20 lettres avec au minimum 2 chiffres, un caractère spécial et un espace.`;
    allInputsAreValids = false;
  }
};

const isConfirmed = (input, confirmInput) => {
  if (input.value !== confirmInput.value) {
    confirmInput.nextElementSibling.innerHTML += `<br> La ${confirmInput.name} ne correspond pas à votre ${input.name}`;
    allInputsAreValids = false;
  }
};

const isChecked = (cgu) => {
  if (!cgu.checked) {
    cgu.nextElementSibling.innerHTML = `<br> Vous devez accpetez les CGUs`;
    allInputsAreValids = false;
  }
};

const checkInputs = (e) => {
  allInputsAreValids = true;

  inputs.forEach((input) => {
    isNotEmpty(input);
  });

  validName(fname);
  isMajor(age);
  validEmail(email);
  isConfirmed(email, confirmEmail);
  validPassword(password);
  isConfirmed(password, confirmPassword);
  isChecked(cgu);

  if (!allInputsAreValids) {
    e.preventDefault();
    return false;
  }

  console.log("Submited !");
};

document.getElementById("submit").addEventListener("click", checkInputs);

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("click", () => {
    if (input.type == "submit") {
      return false;
    }
    input.nextElementSibling.innerHTML = "";
  });
});
