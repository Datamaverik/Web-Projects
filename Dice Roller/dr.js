const max=6;
const min=1;
let message=document.getElementById("message");

function updatemessage(res,classname){
    message.style.opacity=0;
    setTimeout(function(){
        message.textContent=res;
        message.className=classname;
    },250)
    setTimeout(function(){
        message.style.opacity=1;
    },250)
}
function updateResults(values, images) {
    diceimages.style.opacity=0;
    diceresult.style.opacity=0;
    if(values.length==0 && images.length==0){
        diceresult.textContent="";
    }
    else{
        setTimeout(function(){
            diceresult.textContent = `dice: ${values.join(", ")}`;
            diceimages.innerHTML = images.join('');
        },250)
        setTimeout(function(){
            diceimages.style.opacity=1;
            diceresult.style.opacity=1;
        },250)
    }
}
function rolldice(){
    let numofdice=document.getElementById("myinput").value;
    numofdice=Number(numofdice);
    if(isNaN(numofdice) || numofdice<1){
        updatemessage("Enter a valid number!","alert");
        updateResults([],[]);
    }
    else{
        updatemessage("","");
        const diceresult=document.getElementById("diceresult");
        const diceimages=document.getElementById("diceimages");
        const values=[];
        const images=[];
        for(let i=0;i<numofdice;i++){
            const rand=Math.floor(Math.random()*(max-min+1))+min;
            values.push(rand);
            images.push(`<img src="dice_images/${rand}.png" alt="Dice ${rand}">`);
        }
        updateResults(values,images);
    }
}
