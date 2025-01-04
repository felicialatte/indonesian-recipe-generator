function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Rendang is a spicy beef stew from Indonesia",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
