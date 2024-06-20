let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let span = document.querySelector("span");
let btns = ["red","yellow","green","blue"];

//if any key pressed game started 
document.addEventListener("keypress" , function() {
    if(started == 0) {  //to start game only once
    console.log("Game started"); 
    started = true;
    levelup();
    }
});
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);

}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 300);

}
function levelup(){
    userSeq = [];
    level++;
h2.innerText = `Level ${level}`;
//random button choose
let randIdx = Math.floor(Math.random() * 3);
let randclr = btns[randIdx];
let randbtn = document.querySelector(`.${randclr}`);
gameSeq.push(randclr);
console.log(gameSeq);

btnflash(randbtn);
highscore();
}
function checkAns(idx) {
if(userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length == gameSeq.length){
        setTimeout(levelup,1000);
    }
    console.log("same value");
}
else {
    h2.innerHTML = `Game over!! Your score was <b>${level}</b> <br> press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor= "rgb(32, 149, 149)";
    },150);
    reset();
}
}
function btnPress() {
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
function highscore() {
    let score = 0; 
    if(level >= score){
 score =   span.innerText = `${level}`; 
    }
    
 }