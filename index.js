const allcells = document.querySelectorAll(".cell");
const statustxt = document.querySelector("#statustxt");
const restart = document.querySelector("#restart");
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let options = ["", "", "", "", "", "", "", "", ""];
let crplayer = "O";
let running = false;

InitializeGame();

function InitializeGame() {
  allcells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restart.addEventListener("click", restartGame);
  statustxt.textContent = `${crplayer}'s turn`;
  running = true;
}

function cellClicked() {
  const ind = this.getAttribute("Ind");
  console.log(ind);

  if (options[ind] != "" || !running) {
    return;
  }
  updateCell(this, ind);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = crplayer;
  cell.textContent = crplayer;
}

function changePlayer() {
  crplayer = (crplayer == "O") ? "X" : "O";
  statustxt.textContent = `${crplayer}'s Turn`;
}

function checkWinner() {
  let roundwon = false;
  for(let i = 0; i<win.length;i++){
    const condition = win[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == ""){
      continue;
    }

    if(cellA == cellB && cellB == cellC) {
      roundwon = true;
      break;
    }
  }
  if (roundwon){
    statustxt.textContent = `${crplayer} wins!`;
    running = false; 
  }
  else if(!options.includes("")){
    statustxt.textContent = `Draw`;
    running = false;

  }
  else{
    changePlayer();
  }
  
}

function restartGame() {}
