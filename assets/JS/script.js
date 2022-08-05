//Create array to hold board data.
let boardData = [
  [0, 0, 0,],
  [0, 0, 0,],
  [0, 0, 0,]
]


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
  console.log(col, row);
}
