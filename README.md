# Chess Puzzle Run

## Features:

### Image generation:
A random puzzle image is generated for the user to work out the best move. 

### Scoring:
When the user enters the correct move the score is increased by 1 and a new image is generated. The game stops when the user enters an incorrect move.  

### Leaderboard:
When the game ends the user is given a prompt to enter a username which adds their chosen name and score to the leaderboard. Unless the user has not scored above 0.

## My Logic: 
On the site loading an image is randomly selected from the assets.

Depending on the image the user will be told either white or black to play. 

The user will enter their answer into the answer box following the instructions given. 

Once the user submits their answer the answer is checked against the image. 

If the user submitted the correct answer the score is incremented by 1 and a new image is generated. 

If the user submits an incorrect answer the game ends and a prompt to enter their username appears. 

The username is then added to the leaderboard as well as their score. 

If the user has a score of 0 they will not be added to the leaderboard. 

## Testing:

### Solutions 
W2P1 solution: F3 F8

W2P2 solution: D5 D6

W2P3 solution: E5 D6

W2P4 solution: F4 G5

W2P5 solution: E4 E5

W2P6 solution: H8 F6

B2P1 solution: B5 B3

B2P2 solution: B3 C3

B2P3 solution: F5 F4

B2P4 solution: F6 E5

B2P5 solution: C8 C4

B2P6 solution: C4 G8


## Deployment:
Site deployed to GitHub Pages. 

To deploy the site I went to the repository. 

Selected settings and went to pages. 

I then set the branch to main and saved. 

I then went to actions and clicked on pages build and deployment and got the link to the site from there.

Link to live site: https://stephenb117.github.io/pp2-chess-puzzle-run/

## Credits:

### Content 
Code to increase the score by one point taken from love maths project. 


### Media
Chess puzzle images and solutions taken from [ChessPuzzle.net](https://chesspuzzle.net/) 