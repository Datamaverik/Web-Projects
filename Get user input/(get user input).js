//document.getElementById("Heading1").textContent="Welcome";
//document.getElementById("Paragraph1").textContent="This is the text";

//1. The easy way = window prompt
let age;
age=window.prompt("Whats your age");
console.log(age);

//2. The Professional way = HTML textbox
let username;
document.getElementById("my submit").onclick=function(){
    username=document.getElementById("my text").value;
    document.getElementById("Heading1").textContent="Hello "+username;
    document.getElementById("Paragraph1").textContent="Your age is "+age;
}