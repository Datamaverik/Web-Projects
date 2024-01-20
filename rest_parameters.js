/*The rest parameters are essentially the opposite of spread parameter.
they bunch a number of arguments into an array
they allow a function to receive a variable number of arguments
eg:*/
function getfood(...foods){
    return foods;
}

const food1='Kadahi Paneer';
const food2='Momos';
const food3='Palak Paneer';
const food4='Burger';
const food5='Pav Bhaji';

const foods=getfood(food1,food2,food3,food4,food5);
console.log(foods);

//eg2:

function getfullname(...strings){
    return strings.join(" ");
}

const fullname=getfullname('Dr.','Abul','Pakeer','Jainulabdeen','Abdul','Kalam');
console.log(fullname);