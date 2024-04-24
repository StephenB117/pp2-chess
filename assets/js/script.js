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
    let userAnswer = document.getElementById("answer").value.toUpperCase();
    let currentPuzzle = document.getElementById("chess-image").innerHTML.substring(24,28);
    let getSolution = getAnswer(currentPuzzle);

    if (userAnswer === getSolution) {
        incrementScore();
        generatePuzzle();
    }
    else {
        resetGame();
        generatePuzzle();
    }
}

function getAnswer(currentPuzzle) {
    const puzzles = {
        B2P1: "B5B3", 
        B2P2: "B3C3",
        B2P3: "F5F4",
        B2P4: "F6E5",
        B2P5: "C8C4",
        B2P6: "C4G8",
        W2P1: "F3F8",
        W2P2: "D5D6",
        W2P3: "E5D6",
        W2P4: "F4G5",
        W2P5: "E4E5",
        W2P6: "H8F6"
    };
    
    if (puzzles[currentPuzzle]) {
        return puzzles[currentPuzzle]; 
    }
    else {
        return "puzzle not found"; 
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
