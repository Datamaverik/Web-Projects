/*Error = An object that is created to represent a problem that
          occurs often with user input or establishing a 
          connection

try{ } = Encloses code that might potentially cause an error
catch{ } = Catch and handles any error thrown from try{}
finally{ } = (optional) Always executes. Used mostly for clean
            up, ex: close files, close connections, release
            resources
*/
 
try{
    console.log(x);
    //Network errors
    //Promise errors
    //Security errors
}
catch(error){
    console.error(error);
}
finally{
    //close files
    //close connections
    //release resources
    console.log("This always executes");
}
console.log("You've reached the end!");

//Errors usually occurs when taking input from user

try{
    const divisor=Number(window.prompt("Enter a divisor"));
    const dividend=Number(window.prompt("Enter a dividend"));
    if(divisor==0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend)|| isNaN(divisor)){
        throw new Error("Enter a valid number!");
    }
    const result=dividend/divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("You've reached the end of the program");

//The above will work in a live server only