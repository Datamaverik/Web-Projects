/*destructuring = extract values from arrays and objects,
                  then assign them to variables in a convinient way
                  [] = to perform array destructuring
                  {} = to perform object destructuring
*/

//----------EXAMPLE 1----------
//Swap the values of two variables

let a=2;
let b=5;

[a,b]=[b,a]

console.log(a);
console.log(b);

//----------EXAMPLE 2----------
//Swap two elements in an array

const colors=["Red","Green","Blue","White","Black"];

[colors[0],colors[4]]=[colors[4],colors[0]];

console.log(colors);

//----------EXAMPLE 3----------
//Assign array elements to variables

const[color1,color2,color3,...restcolors]=colors;
//we can even use rest operator (...)to make a new array and assign
//the rest of the elements of the array into that array

console.log(color1);
console.log(color2);
console.log(color3);
console.log(restcolors);

//----------EXAMPLE 4----------
//Extract values from objects

const person1={
    firstName: "Yuji",
    lastName: "Itadori",
    age: 19,
    job: "Jujutsu Sorceror",
}

const person2={
    firstName: "Fusiguro",
    lastName: "Megumi",
    age: 19,
}

let {firstName,lastName,age,job="unemployed"}=person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//----------EXAMPLE 5----------
//destructuring in function parameter

function displayPerson({firstName,lastName,age,job="unemployed"}){
    console.log("Name: "+firstName+" "+lastName);
    console.log("age: "+age);
    console.log("job: "+job);
}

displayPerson(person2);