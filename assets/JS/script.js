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
    console.log(boardData);
  }
}
