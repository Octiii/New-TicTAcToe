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
    drawMarkers();
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
