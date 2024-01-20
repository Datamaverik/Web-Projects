document.getElementById("H1").textContent="Dice Roller";
const min=1;
const max=6;
let output1=1;
let output2=1;
let label=document.getElementById("mybtn").onclick=function(){
    output1=Math.round(Math.random()*(max-min))+min;
    output2=Math.round(Math.random()*(max-min))+min;
    document.getElementById("label1").textContent=output1;
    document.getElementById("label2").textContent=output2;
}