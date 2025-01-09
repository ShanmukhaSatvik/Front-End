let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let highscore=0;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function () {
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randomBtn);
}
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
let allBtns=document.querySelectorAll('.btn');
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function btnPress() {
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}
function checkAns(idx) {
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        let score=level-1;
        highscore=Math.max(highscore,score);
        h2.innerHTML=`GAME OVER!Your score was ${score}.High score is ${highscore}<br>Press any key to restart`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor="white";
        }, 150);
        reset();
    }
}
function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}