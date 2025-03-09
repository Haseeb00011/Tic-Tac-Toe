let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msg_cont =document.querySelector(".msg_cont");
let msg = document.querySelector(".msg");
let turnO = true;

let winpattern = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
boxes.forEach((box) => {
  box.addEventListener("click", function () {
    // console.log("box was click");
    if (turnO) {
      box.innerText = "✔";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    CheckWinner();
  });
});
const disabledboxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations\n Player ${winner} Won!`;
    msg_cont.classList.remove("hide");
    newbtn.classList.remove("hide");
    resetbtn.classList.add("hide");
    disabledboxes();
    
}
const CheckWinner = () => {
    for (pattern of winpattern) {
        let pos1val = boxes[pattern[0] - 1].innerText; 
        let pos2val = boxes[pattern[1] - 1].innerText;
        let pos3val = boxes[pattern[2] - 1].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner is ",pos1val); 
                    
    resetbtn.classList.add("hide");
                showWinner(pos1val);

            }
        }
    }
};
const resetGame = () => {
 turnO = true;
enableboxes();
msg_cont.classList.add("hide");
newbtn.classList.add("hide");
resetbtn.classList.remove("hide");
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);