const CtoF=document.getElementById("CtoFbtn");
const FtoC=document.getElementById("FtoCbtn");
const btn=document.getElementById("mybtn");
let display=document.getElementById("para");
let result;
let input;

function updatemessage(res,classname){
    display.style.opacity=0;
    setTimeout(function(){
        display.textContent=res;
        display.className=classname;
    },250)
    setTimeout(function(){
        display.style.opacity=1;
    },250)
}

btn.onclick=function tempconvert(){
    
    input=document.getElementById("myinput").value;
    
    console.log(input);
    input=Number(input);
    //console.log(input);
    if(isNaN(input)){
        updatemessage("Enter a valid number","alert");
        //display.textContent="Enter a valid number";
    }
    else{
        //console.log(typeof(input),input);
        if(CtoF.checked){
            result=(9/5)*input+32;
            updatemessage(input+"℃ = "+result+"F","");
            //display.textContent=input+"℃ = "+result+"F";
        }
        else if(FtoC.checked){
            result=(5/9)*(input-32);
            updatemessage(input+"F = "+result+"℃","");
            //display.textContent=input+"F = "+result+"℃";
        }
        else{
            updatemessage("Chose a unit!","alert");
            //display.textContent="Chose a unit!";
        }
        //console.log(input);
    }
}

