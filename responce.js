document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const userInput = document.getElementById("user-input");
    const responseContainer = document.getElementById("response-container");

    submitButton.addEventListener("click", function () {
        const inputText = userInput.value;
        const responseText = 'holla'; // Replace with your response generation logic
        responseContainer.textContent = responseText;
    });
});