//Create array to hold board data.
let boardData = [
  [0, 0, 0,],
  [0, 0, 0,],
  [0, 0, 0,]
]

//Determines whos turn it is 
let player = 1;
//Game state
let gameOver = false;

//Pull cell class divs from DOM.
const cellDiv = document.querySelectorAll(".cell");

//Pull result div
const resultElement = document.getElementById("result");

const bloop = new Audio("GoodBloop.mp3");
bloop.volume = 0.1;
const winner = new Audio("fanfare.mp3");
winner.volume = 0.1;

//Increments 0's scoree
function incrementScorreO() {
  var scorreOValue = document.getElementById("scorreO");
  var actualValue = scorreOValue.innerHTML;

  ++actualValue;
  document.getElementById("scorreO").innerHTML = actualValue;
}
//Increments X's scoree
function incrementScorreX() {
  var scorreOValue = document.getElementById("scorreX");
  var actualValue = scorreOValue.innerHTML;

  ++actualValue;
  document.getElementById("scorreX").innerHTML = actualValue;
}

//Event listner for cells.
cellDiv.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    bloop.play();
    placeMarker(index);
  });
});

//Function for placing markers.
function placeMarker(index) {
  //Determine index position
  let col = index % 3
  let row = (index - col) / 3
  //Check if current cell is empty 
  if (boardData[row][col] == 0 && gameOver == false) {
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
      endGame(1);
      incrementScorreX();
      winner.play();
      return
    } //Player two wins
    else if (rowSum == -3 || colSum == -3) {
      incrementScorreO()
      endGame(2);
      winner.play();
      return
    }
  }
  //check diagonals
  let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
  let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
  if (diagonalSum1 == 3 || diagonalSum2 == 3) {
    //Player one wins
    endGame(1);
    incrementScorreX();
    winner.play();
    return
  } //Player two wins
  else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
    incrementScorreO()
    endGame(2);

    return
  }
  //Check For a tie.
  if (boardData[0].indexOf(0) == -1 &&
    boardData[1].indexOf(0) == -1 &&
    boardData[2].indexOf(0) == -1) {
    endGame(0);
    return
  }
}

//Fucntion to end game and display result
function endGame(winner) {
  gameOver = true;

  //Check if game endedn in a tie 
  if (winner == 0) {
    resultElement.innerText = "Its a Tie!"
  } else if (winner == 1) {
    resultElement.innerText = "X Wins!"
  } else if (winner == 2) {
    resultElement.innerText = "O Wins!"
  }
};

//Restart game
const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", () => {
  boardData = [
    [0, 0, 0,],
    [0, 0, 0,],
    [0, 0, 0,]
  ];
  player = 1;
  gameOver = false;
  //Reset Game board
  cellDiv.forEach(cell => {
    cell.classList.remove("cross", "circle");
  });
  //Reset text
  resultElement.innerText = "";
  //Stop music
  winner.pause();
  winner.currentTime = 0;
});