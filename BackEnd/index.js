
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-button")
  const userInput = document.getElementById("userinput");
  const responseContainer = document.getElementById("response-container");
  
  submitButton.addEventListener("click", async function () {
  const response = await fetch("http://localhost:3000/openai-completion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify({ userInput }),

    })
    const responsedata = await response.json();
    responseContainer.textContent = responsedata.text;
  });
});




