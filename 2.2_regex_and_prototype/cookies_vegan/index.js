const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  [
    "Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread.",
  ],
  [325, 10],
];

function Recipe(title, steps) {
  let recipe = Object.create(Recipe.prototype);
  recipe.title = title;
  recipe.steps = steps;

  return recipe;
}

Recipe.prototype.cook = function () {
  let stringSteps = "";
  this.steps.forEach((step) => {
    if (step.length == 1) {
      stringSteps += "<br> " + step.toString();
    }

    if (step == steps[steps.length - 1]) {
      stringSteps += `<br> Then, heat ${step[1]} minutes in the oven at ${step[0]} degrees.`;
    }

    if (step[3] == "dry") {
      stringSteps += `<br> Add ${step[0]} ${step[1]} of ${step[2]} to the bowl`;
    } else if (step[3] == "wet") {
      stringSteps += `<br> Pour ${step[0]} ${step[1]} of ${step[2]} to the bowl`;
    }
  });
  document.getElementById("cook").innerHTML = stringSteps;
};

const cookies = Recipe("LES MEILLEURS COOKIES VEGANS AU CHOCOLAT", steps);

const cooking = () => {
  cookies.cook();
};

document.getElementById("submit").addEventListener("click", cooking);
