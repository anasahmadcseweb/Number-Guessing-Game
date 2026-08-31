// ===============================
// NUMBER GUESSING GAME
// ===============================


// Generate random number between 1 and 100

let target = Math.floor(Math.random() * 100) + 1;


// Game variables

let attempts = 0;

let gameOver = false;


// Get HTML elements

const guessInput = document.getElementById("guessInput");

const guessBtn = document.getElementById("guessBtn");

const quitBtn = document.getElementById("quitBtn");

const newGameBtn = document.getElementById("newGameBtn");

const message = document.getElementById("message");

const attemptsText = document.getElementById("attempts");

const numberBox = document.getElementById("numberBox");


// ===============================
// CHECK GUESS
// ===============================

function checkGuess() {

    // Don't allow guesses after game ends

    if (gameOver) {

        return;

    }


    // Get user's number

    const guess = Number(guessInput.value);


    // Validate input

    if (
        guess < 1 ||
        guess > 100 ||
        guessInput.value === ""
    ) {

        message.textContent =
            "⚠️ Enter a number between 1 and 100.";

        return;
    }


    // Increase attempts

    attempts++;

    attemptsText.textContent = attempts;


    // ===============================
    // CORRECT GUESS
    // ===============================

    if (guess === target) {

        message.textContent =
            "🎉 SUCCESS! CORRECT GUESS!";

        numberBox.textContent = target;

        gameOver = true;

    }


    // ===============================
    // TOO SMALL
    // ===============================

    else if (guess < target) {

        message.textContent =
            "📈 Too small! Take a bigger guess.";

    }


    // ===============================
    // TOO BIG
    // ===============================

    else {

        message.textContent =
            "📉 Too big! Take a smaller guess.";

    }


    // Clear input

    guessInput.value = "";

    guessInput.focus();

}


// ===============================
// QUIT GAME
// ===============================

function quitGame() {

    if (gameOver) {

        return;

    }


    message.textContent =
        "👋 Game over! You quit the game.";


    // Show answer

    numberBox.textContent = target;


    gameOver = true;

}


// ===============================
// NEW GAME
// ===============================

function newGame() {

    // Generate new number

    target =
        Math.floor(Math.random() * 100) + 1;


    // Reset attempts

    attempts = 0;


    // Reset game

    gameOver = false;


    // Reset UI

    attemptsText.textContent = "0";

    numberBox.textContent = "?";

    message.textContent =
        "Make your first guess!";

    guessInput.value = "";

    guessInput.focus();

}


// ===============================
// BUTTON EVENTS
// ===============================

guessBtn.addEventListener(
    "click",
    checkGuess
);


quitBtn.addEventListener(
    "click",
    quitGame
);


newGameBtn.addEventListener(
    "click",
    newGame
);


// ===============================
// ENTER KEY SUPPORT
// ===============================

guessInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            checkGuess();

        }

    }
);


// Automatically focus input

guessInput.focus();
