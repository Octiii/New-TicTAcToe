
//Pull cell class divs from DOM.
const cellDiv = document.querySelectorAll(".cell");
//Event listner for cells.
cellDiv.forEach(cell => {
  cell.addEventListener("click", () => {
    console.log("ping")
  })
})
