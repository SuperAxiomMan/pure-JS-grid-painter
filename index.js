const gridCanvas = document.getElementById("gridCanvas");
const grid = document.getElementById("pixelCanvas");
const colorSelector = document.getElementById("colorSelector");
const rows = window.innerHeight / 20;
const columns = 100;
let color = "blue";

//canvas generator
let tableRows = "";
let r = 1;

while (r <= rows) {
  tableRows += "<tr>";
  for (let c = 1; c <= columns; c++) {
    tableRows += `<td></td>`;
  }
  tableRows += "</tr>";
  r += 1;
}

grid.insertAdjacentHTML("afterbegin", tableRows);

//color fill
const cellClick = document.querySelectorAll("td");
const canvasLength = cellClick.length;

for (var i = 0; i < canvasLength; i++) {
  cellClick[i].addEventListener("click", function (e) {
    fillCell(e.target);
  });
}

function fillCell(cell) {
  colorSelector.style.display = "none";
  console.log(cell);
  cell.style.backgroundColor === color
    ? (cell.style.backgroundColor = "white")
    : (cell.style.backgroundColor = color);
}

//display color picker
window.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();

    colorSelector.style.display === "none"
      ? (colorSelector.style.display = "block")
      : (colorSelector.style.display = "none");
    console.log(colorSelector.style.display === "none");
  },
  false
);

// color Choose
const colorPick = document.querySelectorAll("label");
const colorPickLenght = colorPick.length;

for (var i = 0; i < colorPickLenght; i++) {
  colorPick[i].addEventListener("click", function (e) {
    selectColor(e.target);
  });
}

function selectColor(colorLabel) {
  console.log(color);
  console.log(colorLabel.className);
  color = colorLabel.className.toString();
  colorSelector.style.display = "none";
}
