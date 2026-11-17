// Select the input, button and result elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Define the checkInput() function
function checkInput() {

    // Get the input value and remove extra spaces
    const inputValue = userInput.value.trim();

    // Check whether the input is empty
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    // Convert the input into a number
    else {
        const number = Number(inputValue);

        // Check whether the input is a valid number
        if (!Number.isFinite(number)) {
            result.textContent = "Please enter a valid number!";
        }

        // Check whether the number is lower than 10
        else if (number < 10) {
            result.textContent = "The number is lower than 10";
        }

        // Check whether the number is higher than 10
        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }

        // Otherwise, the number is equal to 10
        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Attach the click event listener
checkBtn.addEventListener("click", checkInput);