const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const result=document.getElementById("result");

function playGame(playerChoice){
    const computerChoice=Math.floor(Math.random()*3+1);
    updateComputerDisplay(computerChoice);
    updatePlayerDisplay(playerChoice);
    if(computerChoice==1 && playerChoice==1){
        //result.textContent="It's a tie!";
        updateDisplay(result,"It's a tie!",500)
    }
    else if(computerChoice==2 && playerChoice==2){
        //result.textContent="It's a tie!";
        updateDisplay(result,"It's a tie!",500)

    }
    else if(computerChoice==3 && playerChoice==3){
        //result.textContent="It's a tie!";
        updateDisplay(result,"It's a tie!",500)

    }
    else if(computerChoice==1 && playerChoice==2){
        //result.textContent="Player Wins!";
        updateDisplay(result,"Player Wins!",500)

    }
    else if(computerChoice==1 && playerChoice==3){
        //result.textContent="Computer Wins!";
        updateDisplay(result,"Computer Wins!",500)

    }
    else if(computerChoice==2 && playerChoice==1){
        //result.textContent="Computer Wins!";
        updateDisplay(result,"Computer Wins!",500)

    }
    else if(computerChoice==2 && playerChoice==3){
        //result.textContent="Player Wins!";
        updateDisplay(result,"Player Wins!",500)

    }
    else if(computerChoice==3 && playerChoice==1){
        //result.textContent="Player Wins!";
        updateDisplay(result,"Player Wins!",500)

    }
    else if(computerChoice==3 && playerChoice==2){
        //result.textContent="Computer Wins!";
        updateDisplay(result,"Computer Wins!",500)

    }
}
function updatePlayerDisplay(choice){
    if(choice==1){
        //playerDisplay.textContent="Player: ✊";
        updateDisplay(playerDisplay,"Player: ✊",250)

    }
    else if(choice==2){
        //playerDisplay.textContent="Player: 🖐️";
        updateDisplay(playerDisplay,"Player: 🖐️",250)

    }
    else if(choice==3){
        //playerDisplay.textContent="Player: ✌️";
        updateDisplay(playerDisplay,"Player: ✌️",250)

    }
}
function updateComputerDisplay(choice){
    if(choice==1){
        //computerDisplay.textContent="Computer: ✊";
        updateDisplay(computerDisplay,"Computer: ✊",250)
    }
    else if(choice==2){
        //computerDisplay.textContent="Computer: 🖐️";
        updateDisplay(computerDisplay,"Computer: 🖐️",250)

    }
    else if(choice==3){
        //computerDisplay.textContent="Computer: ✌️";
        updateDisplay(computerDisplay,"Computer: ✌️",250)

    }
}
function updateDisplay(display,content,t){
    display.style.opacity=0;
    display.style.transform="translateY(-10px)";
    setTimeout(()=>{
        display.textContent=content;
        display.style.transform="translateY(0)"
        display.style.opacity=1;
    },t);
}