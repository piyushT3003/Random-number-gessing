let targetNumber;
let attemptsLeft;

function initializeGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    document.getElementById('attemptsLeft').textContent = attemptsLeft;
    document.getElementById('resultText').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
}

function submitGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('resultText');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "🚫 Please enter a number between 1 and 100.";
        return;
    }

    attemptsLeft--;
    document.getElementById('attemptsLeft').textContent = attemptsLeft;

    if (guess === targetNumber) {
        feedback.textContent = "🎉 Correct! You guessed the number!";
        disableInput();
    } else if (attemptsLeft === 0) {
        feedback.textContent = `❌ Game over! The number was ${targetNumber}.`;
        disableInput();
    } else {
        feedback.textContent = guess < targetNumber ? "📉 Too low!" : "📈 Too high!";
    }
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
}

function restartGame() {
    initializeGame();
}

window.onload = initializeGame;
