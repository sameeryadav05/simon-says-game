let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
// console.log("game started")
let btns = ["magenta", "skyblue", "orange", "blue"];
let heading = document.querySelector("h2");
// let magenta = document.querySelector(".magenta");
// let skyblue = document.querySelector(".skyblue");
// let orange = document.querySelector(".orange");
// let blue = document.querySelector(".blue");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started")
        started = true;
        levelUp();
    }
})

function flash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn)
{
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    }, 100);
}
function levelUp(){
    userseq = [];
    level++;
    heading.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    flash(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    // flash(randbtn);
 }

function checkAnswer(idx){
    // console.log("Current Level : ",level);
    // let idx = level - 1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length)
            {
            setTimeout(levelUp,1000);
        }}
    else{
        heading.innerHTML = `Game Over,your score <b>${level}</b> <br>Press Any Key to Restart`;
        document.body.style.backgroundColor = "red";
        setTimeout(()=>{
            document.body.style.backgroundColor = "white";
        },100)
        reset();
    }
}

 function btnPress(){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAnswer(userseq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress)
 }

 function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
 }
