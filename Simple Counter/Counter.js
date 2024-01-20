const increaseBtn=document.getElementById("increaseBtn");
const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");

let count=0;
increaseBtn.onclick=function(){
  count++;
  document.getElementById("countlabel").textContent=count;
}
decreaseBtn.onclick=function(){
  count--;
  document.getElementById("countlabel").textContent=count;
}
resetBtn.onclick=function(){
  count=0;
  document.getElementById("countlabel").textContent=count;
}

document.getElementById("H1").textContent="COUNTER";