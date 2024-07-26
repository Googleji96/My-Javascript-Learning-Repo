let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let Newbtn = document.querySelector("#New-btn");
let msgbtn = document.querySelector(".msg-contaner");
let msg = document.querySelector(".msg");

let turnO = true; // playerX , playerO
// This is 2D array 
const winPaterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const enableBtn = () => {
  for (box of boxs) {
    box.disabled = false;
    box.innerText = "";
    
  }
}
const resetGame = () => {
  turnO = true;
  enableBtn();
  msgbtn.classList.add("hide")
};

let showWinner = (winner) => {
  msg.innerText = `Congatulation, Winner is ${winner}`;
  msgbtn.classList.remove("hide")
  disableBtn();
};

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Googleji");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winPaterns) {
    let pos1Val = boxs[pattern[0]].innerText;
    let pos2Val = boxs[pattern[1]].innerText;
    let pos3Val = boxs[pattern[2]].innerText;
    
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

const disableBtn = () => {
  for (box of boxs) {
    box.disabled = true;
    
  }
}

Newbtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)