let screen = document.getElementById("screen");
let errorMessage = document.getElementById("error-message");
let memoryValue = 0;

// Insert value into screen
function insert(value) {
    clearError();
    screen.value += value;
}

// Clear screen
function clearScreen() {
    screen.value = "";
    clearError();
}

// Erase last character
function eraseLast() {
    screen.value = screen.value.slice(0, -1);
    clearError();
}

// Compute result with error handling
function computeResult() {
    try {
        let expression = screen.value.trim();

        // Prevent division by zero
        if (expression.includes("/0")) {
            throw new Error("❌ Division by zero is not allowed!");
        }

        // Evaluate expression
        let result = eval(expression);

        // Check for NaN or infinite values
        if (!isFinite(result) || isNaN(result)) {
            throw new Error("❌ Invalid calculation!");
        }

        screen.value = result;
    } catch (error) {
        showError(error.message);
        screen.value = "";
    }
}

// Compute Square Root with error handling
function calculateRoot() {
    try {
        let val = parseFloat(screen.value);

        if (isNaN(val)) {
            throw new Error("❌ Enter a number first!");
        }

        if (val < 0) {
            throw new Error("❌ Cannot find square root of a negative number!");
        }

        screen.value = Math.sqrt(val).toFixed(6);
    } catch (error) {
        showError(error.message);
    }
}

// Memory Functions
function memClear() {
    memoryValue = 0;
}
function memRecall() {
    screen.value += memoryValue;
}
function memStore() {
    memoryValue += parseFloat(screen.value) || 0;
}
function memSubtract() {
    memoryValue -= parseFloat(screen.value) || 0;
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
}

// Show error messages
function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.add("show");
    setTimeout(() => {
        errorMessage.classList.remove("show");
        errorMessage.textContent = "";
    }, 3000);
}

// Clear error message
function clearError() {
    errorMessage.classList.remove("show");
    errorMessage.textContent = "";
}

// Handle keyboard input
document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9") {
        insert(event.key);
    } else if (["+", "-", "*", "/"].includes(event.key)) {
        insert(event.key);
    } else if (event.key === "Enter") {
        computeResult();
    } else if (event.key === "Backspace") {
        eraseLast();
    } else if (event.key === "Escape") {
        clearScreen();
    }
});
