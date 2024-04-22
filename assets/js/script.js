document.addEventListener("DOMContentLoaded", function (){
    generatePuzzle();
    checkColorToPlay();
})
document.getElementById("submit-answer").addEventListener("click", checkColorToPlay);

/**
 * Generates the puzzle for the user. 
 */
function generatePuzzle() {
    let puzzles = ["B2P1.JPG", "B2P2.JPG", "B2P3.JPG", "B2P4.JPG", "B2P5.JPG", "B2P6.JPG", "W2P1.JPG", "W2P2.JPG", "W2P3.JPG", "W2P4.JPG", "W2P5.JPG", "W2P6.JPG"];
    let randomNum = Math.floor(Math.random() * 12);
    let imageDiv = document.getElementById("chess-image");

    imageDiv.innerHTML = `<img src="assets/images/${puzzles[randomNum]}" alt="Chess puzzle"/>`;
}

/**
 * Checks answer against the image shown.
 */
function checkAnswer() {
    let from = document.getElementById("from").innerText;
    let to = document.getElementById("to").innerText;
    let currentPuzzle = document.getElementById("chess-image").innerHTML;
    console.log(currentPuzzle);
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
    
}

/**
 * Resets players score to 0
 */
function resetGame() {
    let Score = document.getElementById("current-score").innerText;
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
