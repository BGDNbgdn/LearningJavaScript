document.addEventListener('DOMContentLoaded', function() {
    

    // Function to update the content of the #frame div
    function updateFrame(message) {
        const frame = document.getElementById('frame');
        frame.innerHTML = `
            <div id="TargetField">${message}</div>
            <div id="NumberOfLives">Your number of lives: ${lives}</div>
            <input type="number" id="GuessInput">
            ${lives > 0 && guess !== targetNumber ? '<button id="GuessButton">Guess</button>' : '<button id="TryAgainButton">Try again</button>'}
        `;
        
        // Add event listener to the TryAgainButton if it exists
        const tryAgainButton = document.getElementById('TryAgainButton');
        if (tryAgainButton) {
            tryAgainButton.addEventListener('click', function() {
                location.reload();
            });
        }

        // Add event listener to the GuessButton if it exists
        const guessButton = document.getElementById('GuessButton');
        if (guessButton) {
            guessButton.addEventListener('click', function() {
                const guessInput = document.getElementById('GuessInput');
                guess = parseInt(guessInput.value);

                if (isNaN(guess)) {
                    updateFrame('Please enter a valid number.');
                } else if (guess < targetNumber) {
                    lives--; // Decrement lives
                    updateFrame('Your guess is smaller than the target number.');
                } else if (guess > targetNumber) {
                    lives--; // Decrement lives
                    updateFrame('Your guess is larger than the target number.');
                } else {
                    updateFrame('Congratulations! You guessed the target number!');
                }

                // Check if lives reach 0 or if the user wins
                if (lives === 0 && guess !== targetNumber) {
                    updateFrame('Game over! You ran out of lives. The target number was ' + targetNumber + '.');
                }
            });
        }
    }

    // Add event listeners to the difficulty buttons
    document.getElementById('ButtonEasy').addEventListener('click', function() {
        lives = 4; // Reset lives for each game
        targetNumber = Math.floor(Math.random() * 20) + 1;
        guess = null; // Reset guess for each game
        updateFrame('You chose Easy difficulty, guess a number between 1 and 20!');
    });

    document.getElementById('ButtonMedium').addEventListener('click', function() {
        lives = 6; // Reset lives for each game
        targetNumber = Math.floor(Math.random() * 50) + 1;
        guess = null; // Reset guess for each game
        updateFrame('You chose Medium difficulty, guess a number between 1 and 50!');
    });

    document.getElementById('ButtonHard').addEventListener('click', function() {
        lives = 8; // Reset lives for each game
        targetNumber = Math.floor(Math.random() * 100) + 1;
        guess = null; // Reset guess for each game
        updateFrame('You chose Hard difficulty, guess a number between 1 and 100!');
    });
});
