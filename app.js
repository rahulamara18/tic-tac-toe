let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelectorAll("#Reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX,playerO
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
       

    });
});
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;

    }
    
}
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";

    }
    
}
const showWinnner=(winner) =>{
    msg.innerText=Congratulations,Winner is ${winner};
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner=()=>{
    for(let patterns of winPatterns){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;

        if(pos1Val!=""&&pos2Val !=""&&pos3Val !=""){
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
                
                
                showWinnner(pos1Val);
            }
        }
        
    } 
};
newGameBtn.addEventListener("click",resetGame);
Reset.addEventListener("click",resetGame);
