const container = document.querySelector("#container");
const btn1 = document.getElementById("createNewGrid");
const btn2 = document.getElementById("clearGrid");

function makeGrid(numOfSquers) {
  for(let i = 0; i < numOfSquers; i++) {
    let row = document.createElement('div');
    row.classList.add = "row-grid";
    row.className = "row-grid";
    row.style.width = 600/numOfSquers + 'px';
    row.style.height = 600/numOfSquers + 'px';
    row.style.border = "1px solid gold";
    container.appendChild(row);
    for(let j = 0; j < numOfSquers; j++) {
      let cell = document.createElement('div');
      cell.classList.add = "cell";
      cell.className = "cell";
      cell.style.width = 600/numOfSquers + 'px';
      cell.style.height = 600/numOfSquers +'px';
      cell.style.border = "1px solid gold";
      row.appendChild(cell);
    };
  };
  
  
  let cellArray = document.getElementsByClassName("cell");
  for(let i = 0; i < cellArray.length; i++) {
    cellArray[i].addEventListener('mouseover', onHover);
  }

}

const defaultGrid = makeGrid(16);

function onHover() {
  this.style.backgroundColor = "gold";
}


function createNewGrid() {
  container.innerHTML = '';
  numOfSquers = prompt("Please enter number of quers grid you want to show!", "16");
  makeGrid(numOfSquers);  
}

btn1.addEventListener('click', createNewGrid);

function clearGrid() {
  container.innerHTML = '';
  makeGrid(16);
}

btn2.addEventListener('click', clearGrid);

