/*.map() = this method is similar to forEach() method.
            It takes a callback and applies that callback to
            each element but the key difference is that it returns
            a new array while the forEach() method used to change
            teh original array itself
            
            In the forEach() method we used to use the element,index
            and array to accomplish our target but here we use only
            the elemnents and return the functionality of the 
            function*/

const students=["itadori","okkutsu","megumi","nobara"];

let newstudents=students.map((element)=>{
    return element.charAt(0).toUpperCase()+element.slice(1).toLowerCase();
});
console.log(newstudents);

// function capitalize(element){
//     return element.charAt(0).toUpperCase()+element.slice(1).toLowerCase();
// }

const dates=['01-01-2024','16-07-2005','24-04-2010','09-03-1977','12-01-1974'];

let newdates=dates.map(formatdates);
console.log(newdates);

function formatdates(element){
    pieces=element.split('-');
    pieces.reverse();
    return pieces.join('-');
}