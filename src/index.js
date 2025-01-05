function displayRecipe(response) {
  console.log("Recipe generated");

  new Typewriter("#recipe", {
    strings: response.data.answer.replace("```html", "").replace("```", ""),
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let isntructionInput = document.querySelector("#user-instructions");
  let apiKey = "ta46b3ee4a3be70c0d2a54a8608fodbb";
  let prompt = `User instructions: Generate an Indonesian recipe about ${isntructionInput.value}`;
  let context =
    "You are an experienced chef and love to write short and easy recipe. Your mission is to generate a quick and easy recipe. Please generate answer in basic HTML. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating a recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
