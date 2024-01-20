//let label=document.getElementById("mylabel").textContent="yes we can";

const min=1;
const max=100;
let count=0;
let guess;
const answer=Math.floor(Math.random()*(max-min+1))+min;
console.log(answer);
const Head=document.getElementById("H1").textContent="Guess The Number!";
const label=document.getElementById("mylabel").textContent="Guess a number between 1 and 100";
const btn=document.getElementById("mybtn");
let message=document.getElementById("message");
btn.onclick=function(){
    guess=document.getElementById("myinput");
    guess=guess.value;
    guess=Number(guess);
    if(isNaN(guess)){
        updatemessage("Enter a valid number!","alert");
    }
    else if(guess<1 || guess>100){
        updatemessage("Enter a valid number!","alert");
    }
    else if(guess>answer){
        count++;
        updatemessage("Too high!!! guess again","");
    }
    else if(guess<answer){
        count++;
        updatemessage("Too low!!! guess again","");
    }
    else{
        if(count>1)
        updatemessage("Congratulations!!! that's the right guess. You took "+count+" attempts","success");
        else
        updatemessage("Congratulations!!! that's the right guess. You took "+count+" attempt","success");
    }
}
function updatemessage(msg,classname){
    message.style.opacity=0;
    setTimeout(function(){
        message.style.opacity=1;
    },250);
    setTimeout(function(){
        message.textContent=msg;
        message.className=classname;
    },300)
}