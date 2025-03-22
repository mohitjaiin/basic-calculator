let display = document.getElementById("display");
let memory = 0;

// Append value to display
function appendToDisplay(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid operation!");
        display.value = "";
    }
}

// Calculate square root
function calculateSquareRoot() {
    let value = parseFloat(display.value);
    if (value < 0) {
        alert("Cannot compute square root of a negative number!");
        return;
    }
    display.value = Math.sqrt(value);
}

// Memory Functions
function memoryClear() {
    memory = 0;
}
function memoryRecall() {
    display.value += memory;
}
function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}
function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
}

// Toggle Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Handle keyboard input
document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9") {
        appendToDisplay(event.key);
    } else if (["+", "-", "*", "/"].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === "Enter") {
        calculateResult();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});
