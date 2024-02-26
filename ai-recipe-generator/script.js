function displayRecipe(response) {
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generateRecipe(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "ca80fb7d3o48t3c14460b13a3d83ca48";
    let prompt = `User instructions: Generate a recipe for ${instructionInput.value}`;
    let context =
      "You are a renowned chef who knows all the recipes around the world. Follow the user instructions clearly to generate a recipe. First, write the 'title' of the recipe inside a <h2> element. Secondly, summarize the 'cooking duration' and 'serving size' inside a standard <p> element. Thirdly, begin with the 'Ingredients' header inside a <h3> element, list the required ingredients in bullet point symbol, and separate each line item with a <br/>. Next, begin with the 'Instructions' header inside a <h3> element, list the recipe step-by-step in numbered list format, and separate each step with a <br/>. Lastly, sign off the recipe with 'SheCodes AI Recipe' inside an <em> element at the end of the recipe after a <br/>.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="blink"> 👨🏻‍🍳 Generating a recipe for ${instructionInput.value}...</div>`;
  
    axios.get(apiUrl).then(displayRecipe);
  }
  
  let recipeForm = document.querySelector("#recipe-form");
  recipeForm.addEventListener("submit", generateRecipe);