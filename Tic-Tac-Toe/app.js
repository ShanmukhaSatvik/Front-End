const h2=document.querySelector('h2');
const button=document.querySelector('#reset');
const cells=document.querySelectorAll('.box');
const turnMusic=new Audio('ting.mp3');
const image=document.querySelector("#image");
let current='X';
let gameOver=false;
for(let cell of cells){
    cell.addEventListener("click",()=>{
        if(gameOver) return;
        if(cell.innerText==""){
            cell.innerText=current;
            current=changeTurn();
            turnMusic.play();
            checkWin();
            if(!gameOver){
                h2.textContent=`It's ${current}'s turn`;
            }
        }
    })
}
function changeTurn() {
    if(current=='X'){
        return 'O';
    }else{
        return 'X';
    }
}
function checkWin() {
    const winConditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<winConditions.length;i++){
        if(
            (cells[winConditions[i][0]].innerText==cells[winConditions[i][1]].innerText) &&
            (cells[winConditions[i][1]].innerText==cells[winConditions[i][2]].innerText) && 
            (cells[winConditions[i][0]].innerText!=="")
        ){
            h2.textContent=`Player ${cells[winConditions[i][0]].innerText} has won`;
            gameOver=true;
            image.style.width="150px";
            break;
        }
    }
    if([...cells].every(cell => cell.innerText != "") && !gameOver) {
        h2.textContent = "Game is a draw!";
        gameOver = true;
    }
}
button.addEventListener("click",reset);
function reset() {
    for(let cell of cells){
        cell.innerText="";
    }
    current="X";
    h2.textContent=`It's ${current}'s turn`;
    image.style.width="0px";
    gameOver=false;
}