/*forEach()= method used to iterate over the elements of an array
             and apply a specified fuction (callback) to each
             element.
             element, index, array
             are provided you can use these as arguments in
             the exact same order to define other function to
             accomplish your tasks.
             inside the forEach() method
array.forEach(callback)*/

let numbers=[1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(display);

function double(element,index,array){
    array[index]=element*2;
}

function display(element){
    console.log(element);
}

let fruits=['aPpLe','orAnGe','bAnanA','kiwi','grapes'];

fruits.forEach(uppercase);
fruits.forEach(display);

function uppercase(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1).toLowerCase();
}
arr=[1,2,3];
arr.forEach((element)=>element+1);
console.log(arr);
