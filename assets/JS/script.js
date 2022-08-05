//Create array to hold board data.
let boardData = [
  [0,0,0,],
  [0,0,0,],
  [0,0,0,]
]


//Pull cell class divs from DOM.
const cellDiv = document.querySelectorAll(".cell");
//Event listner for cells.
cellDiv.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    console.log(index);
  });
});
