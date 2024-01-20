/*.filter() = It takes a callback which return boolean output
              and uses the boolean output to stick the elements
              from the older array into a new array and leaves
              all the elements for which the callback returns
              false*/
let ages=[16,18,18,14,19,21,20,15];

let adults=ages.filter(isadult);
console.log(adults);
function isadult(element){
    if(element>=18)
    return true;
    else
    return false;
}

//function expression
let children=ages.filter(function(element){
    if(element<18)
    return true;
    else
    return false;
});
console.log(children);