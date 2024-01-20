/*.reduce() = This method takes a callback and uses its fuctionality
               to change the array and reduce it to a single value.
               You are given two arguments:
               accumulator and element (in that order)
               accumulator: as the name suggest stores the elemet's
               value.*/
const prices=[4,2,15,13,9];

const total1=prices.reduce(sum); 
const maximum=prices.reduce(largest);
console.log("₹"+total1.toFixed(2)+"The maximum is: "+maximum);

function sum(accumulator,element){
    return accumulator+element;
}
function largest(accumulator,element){
    return Math.max(accumulator,element);
}
// function expression
let total2=prices.reduce(function(accumulator,element){
    return accumulator*element;
});
console.log(total1+" "+total2);