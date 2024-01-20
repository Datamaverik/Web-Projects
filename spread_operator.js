/*spread operator = ... is used to unpack the elements of array or string.
eg:*/
let numbers=[1,2,3,4,5];
let maximum=Math.max(...numbers);
let minimum=Math.min(...numbers);
console.log(maximum+" "+minimum);

/*It also allows us to append two arrays
eg:*/
let vegetables=['potato','tomato','cabbage'];
let fruits=['apple','kiwi','banana','grapes'];
let foods=[...vegetables, ...fruits];
console.log(foods);
