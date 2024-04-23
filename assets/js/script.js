document.addEventListener("DOMContentLoaded", generatePuzzle);
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

/**
 * Generates the puzzle for the user. 
 */
function generatePuzzle() {
    let puzzles = ["B2P1.JPG", "B2P2.JPG", "B2P3.JPG", "B2P4.JPG", "B2P5.JPG", "B2P6.JPG", "W2P1.JPG", "W2P2.JPG", "W2P3.JPG", "W2P4.JPG", "W2P5.JPG", "W2P6.JPG"];
    let randomNum = Math.floor(Math.random() * 12);
    let imageDiv = document.getElementById("chess-image");

    imageDiv.innerHTML = `<img src="assets/images/${puzzles[randomNum]}" alt="Chess puzzle">`;
    document.getElementById("answer").value = "";
    checkColorToPlay();
    
}

/**
 * Checks answer against the image shown.
 */
function checkAnswer() {
    let answer = document.getElementById("answer").value.toUpperCase();
    let currentPuzzle = document.getElementById("chess-image").innerHTML;

    if (currentPuzzle === '<img src="assets/images/B2P1.JPG" alt="Chess puzzle">') {
        if (answer === "B5B3") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    } 
    else if (currentPuzzle === '<img src="assets/images/B2P2.JPG" alt="Chess puzzle">') {
        if (answer === "B3C3") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/B2P3.JPG" alt="Chess puzzle">') {
        if (answer === "F4F5") {
            incrementScore();
            generatePuzzle();
        } 
        else {
            resetGame();
            generatePuzzle();
        }   
    }
    else if (currentPuzzle === '<img src="assets/images/B2P4.JPG" alt="Chess puzzle">') {
        if (answer === "F6E5") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/B2P5.JPG" alt="Chess puzzle">') {
        if (answer === "C8C4") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/B2P6.JPG" alt="Chess puzzle">') {
        if (answer === "C4G8") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/W2P1.JPG" alt="Chess puzzle">') {
        if (answer === "F3F8") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/W2P2.JPG" alt="Chess puzzle">') {
        if (answer === "D5D6") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/W2P3.JPG" alt="Chess puzzle">') {
        if (from === "E5D6") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/W2P4.JPG" alt="Chess puzzle">') {
        if (answer === "F4G5") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/W2P5.JPG" alt="Chess puzzle">') {
        if (answer === "E4E5") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else if (currentPuzzle === '<img src="assets/images/W2P6.JPG" alt="Chess puzzle">') {
        if (answer === "H8F6") {
            incrementScore();
            generatePuzzle();
        }
        else {
            resetGame();
            generatePuzzle();
        }
    }
    else {
        alert("Something went wrong");
    }
}

/**
 * Increments the score by 1 if answer is correct.
 */
//Taken from Love maths project. 
function incrementScore() {
   let Score = parseInt(document.getElementById("current-score").innerText);
   document.getElementById("current-score").innerText = ++Score;  
    
}

/**
 * Adds players name and score to the leaderboard.
 */
function updateLeaderboard() {
    let username = prompt("Please enter a username");
    let score = document.getElementById("current-score").innerText;
    let newRow = document.createElement("tr");
    let userCell = document.createElement("td");
    let scoreCell = document.createElement("td");
    let tableBody = document.getElementById("player-scores");

    userCell.innerText = username;
    scoreCell.innerText = score;
    newRow.appendChild(userCell);
    newRow.appendChild(scoreCell);
    tableBody.appendChild(newRow);
}

/**
 * Resets players score to 0
 */
function resetGame() {
    let score = document.getElementById("current-score").innerText;

    if (score > 0) {
        updateLeaderboard();
    }

    document.getElementById("current-score").innerText = 0;  
    
}

/**
 * Checks which side is to play white or black.
 */
function checkColorToPlay () {
    let colorToPlay = document.getElementById("color-to-move");
    let puzzleLink = document.getElementById("chess-image").innerHTML.charAt(24);

    if (puzzleLink === "W") {
        colorToPlay.innerText = "White";
    }
    else {
        colorToPlay.innerText = "Black";
    };
}
