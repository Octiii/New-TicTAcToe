//Create array to hold board data.
let boardData = [
  [0, 0, 0,],
  [0, 0, 0,],
  [0, 0, 0,]
]

//Determines whos turn it is 
let player = 1;

//Pull cell class divs from DOM.
const cellDiv = document.querySelectorAll(".cell");
//Event listner for cells.
cellDiv.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index);
  });
});

//Function for placing markers.
function placeMarker(index) {
  //Determine index position
  let col = index % 3
  let row = (index - col) / 3
  //Check if current cell is empty 
  if (boardData[row][col] == 0) {
    boardData[row][col] = player;
    //Change player
    player *= -1;
    //Updates the board with apropriate simbol
    drawMarkers();
    //Check if anybody has won 
    checkResult();
  }
}

//Create function for placing markers 
function drawMarkers() {
  //Iterates over rows
  for (let row = 0; row < 3; row++) {
    //Iterate over colums
    for (let col = 0; col < 3; col++) {
      //Cheks if it is player 1 number
      if (boardData[row][col] == 1) {
        //Update cell class to add cross
        cellDiv[(row * 3) + col].classList.add("cross");
      } else if (boardData[row][col] == -1) {
        //Update cell class to add circle
        cellDiv[(row * 3) + col].classList.add("circle");
      }
    }
  }
}

//Result function check
function checkResult() {
  //Check rows and colums
  for (let i = 0; i < 3; i++) {
    let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2]
    let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i]
    if (rowSum == 3 || colSum == 3) {
      //Player one wins
      console.log("Player 1 wins");
    } //Player two wins
    else if (rowSum == -3 || colSum == -3) {
      console.log("player 2 Wins");
    }
  }
  //check diagonals
  let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
  let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
  if (diagonalSum1 == 3 || diagonalSum2 == 3) {
    //Player one wins
    console.log("Player 1 wins");
  } //Player two wins
  else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
    console.log("player 2 Wins");
  }
}