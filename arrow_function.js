/*arrow function = a concise way of writing fuction expressions
                    it is good for writing small fuction which we
                    are only going to use once
                    (parameter)=> some code*/
const hello=(Name,age)=>{
    console.log("Hello "+Name);
    console.log("You are "+age+" years old");
}
hello("Shreyash", 19);

let numbers=[1,2,3,4,5,6,7,8,9];

const sqaure=numbers.map((element)=>{
    return Math.pow(element,2);
})
console.log(sqaure);

numbers.forEach((element,index,array)=>{
    array[index]=Math.pow(element,3);
})
console.log(numbers);

const even=numbers.filter((element)=>element%2===0)
//if the logic of the .filter() method is only one line then we 
//don't need to use the return statement 
console.log(even);

const sum=numbers.reduce((accumulator,element)=>accumulator+element);
console.log(sum);