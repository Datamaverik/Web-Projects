const myBox=document.getElementById("myBox");
const mybtn=document.getElementById("mybtn");
const moveAmount = 10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        myBox.style.backgroundColor="Orange";
        myBox.textContent="😮";
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight": 
                x+=moveAmount;
                break;
        }
        myBox.style.transform=`translate(${x}px, ${y}px)`;
        console.log(myBox.key);
    }
})
document.addEventListener("keyup",event=>{
    myBox.style.backgroundColor="lightgreen";
    myBox.textContent="😊";
})

mybtn.addEventListener("click",(event)=>{
    if(myBox.style.visibility==="hidden"){
        myBox.style.visibility="visible";
        mybtn.textContent="Hide";
    }
    else{
        myBox.style.visibility="hidden";
        mybtn.textContent="Show";
    }
})