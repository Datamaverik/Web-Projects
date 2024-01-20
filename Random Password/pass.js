let message=document.getElementById("message");

function passwordgenerator(length,lowercase,uppercase,numbers,symbols){
    let max;
    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower="abcdefghijklmnopqrstuvwxyz";
    const num="1234567890";
    const sym="@_-!*&$#";
    let result='';
    let password='';
    if(lowercase==true){
        result+=lower;
    }
    if(uppercase==true){
        result+=upper;
    }
    if(numbers==true){
        result+=num;
    }
    if(symbols==true){
        result+=sym;
    }
    max=result.length;
    if(max==0)
    return '';
    for(let i=0;i<length;i++){
        let ind=Math.floor(Math.random()*max);
        password+=result.charAt(ind);
    }
    return password;
}

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
function Generator(){
    
    let length=document.getElementById("myinput").value;
    length=Number(length);
    const lowercase=document.getElementById("lowercase");
    const uppercase=document.getElementById("uppercase");
    const numbers=document.getElementById("numbers");
    const symbols=document.getElementById("symbols");
    if(isNaN(length) || length<0){
        updatemessage("Enter a valid number!","alert");
    }
    else if(length<8 && length>=0){
        updatemessage("The password should be atleast 8 characters long","alert");
    }
    else{
        let password=passwordgenerator(length,lowercase.checked,uppercase.checked,numbers.checked,symbols.checked);
        if(password.length==0)
        updatemessage("Select atleast one category!");
        updatemessage(password,'');
    }
}