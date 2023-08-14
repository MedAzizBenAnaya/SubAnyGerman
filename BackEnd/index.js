const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-button")
  const userInput = document.getElementById("userinput");
  const responseContainer = document.getElementById("response-container");
  
  submitButton.addEventListener("click", function () {

    const inputText = userInput.value;
    responseContainer.textContent = runCompletion(inputText);
  });
});


async function runCompletion (userInput) {
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: userInput,
    max_tokens:100
    });

    return completion.data.choices[0].text;
}

