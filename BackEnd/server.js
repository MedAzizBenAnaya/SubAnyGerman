const express = require("express");

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()


const app = express();
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
const openai = new OpenAIApi(configuration);


async function runCompletion (userInput) {
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: userInput.value,
    max_tokens:100
    });

    return completion.data.choices[0].text;
}

app.post("/openai-completion", async (req, res) => {

    const userInput = req.body.userInput;

    const response = runCompletion(userInput);


    res.json(response);

  });


app.listen(3000, () => {
    console.log("Backend server started on port 3000");
  })