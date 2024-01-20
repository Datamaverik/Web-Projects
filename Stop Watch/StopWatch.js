const display=document.getElementById("display");
let timer=null;
let startTime=0;
let elaspedTime=0;
let isRunning=false;

function start(){
    if(!isRunning){
        startTime=Date.now()-elaspedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elaspedTime=Date.now()-startTime;
        isRunning=false;
    }
}

function reset(){
    timer=null;
    startTime=0;
    elaspedTime=0;
    isRunning=false;
    display.textContent="00:00:00:00";
}

function update(){
    const currentTime=Date.now();
    elaspedTime=currentTime-startTime;
    let hours= Math.floor(elaspedTime/(1000*60*60)).toString().padStart(2,0);
    let minutes= Math.floor(elaspedTime/(1000*60)%60).toString().padStart(2,0);
    let seconds=Math.floor(elaspedTime/(1000)%60).toString().padStart(2,0);
    let milliseconds=Math.floor((elaspedTime%1000)/10).toString().padStart(2,0);
    let time=hours+":"+minutes+":"+seconds+":"+milliseconds;
    display.textContent=time;
}