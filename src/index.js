function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 45,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
  let prompt = `generate a poem about ${userInput.value}`;
  let context =
    "user instructions: you are a romantic poem expert and love to write short poems. your mission is to generate a four line poem in basic HTML and seperate each line with a <br />. be sure to follow the user instructions. sign the poem with 'SheCodes Ai' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Poem about ${userInput.value}</div>`;

  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormGenerator = document.querySelector("#poem-generator");
poemFormGenerator.addEventListener("submit", generatePoem);
