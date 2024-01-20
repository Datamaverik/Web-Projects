const checkbox=document.getElementById("mycheckbox");
const visabtn=document.getElementById("visabtn");
const mastercardbtn=document.getElementById("mastercardbtn");
const paypalbtn=document.getElementById("paypalbtn");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

document.getElementById("mybtn").onclick=function(){
    if(checkbox.checked){
        subresult.textContent="You've subscribed!!"
        if(visabtn.checked){
            paymentresult.textContent="You've chosen visa as your payment option";
        }
        else if(mastercardbtn.checked){
            paymentresult.textContent="You've chosen Mastercard as your payment option";
        }
        else if(paypalbtn.checked){
            paymentresult.textContent="You've chosen Paypal as your payment option";
        }
        else{
            paymentresult.textContent="You've not selected any payment option";
        }
    }
    else{
        subresult.textContent="You are NOT subscribed!!";
    }
}