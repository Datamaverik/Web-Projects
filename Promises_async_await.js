/**Promises = An object that manages asynchronus operations.
 *            Wrap a Promise Object around {asynchronus code}
 *            "I promise to return a value"
 *            Pending -> Resolved or rejected
 *            new Promise((resolve,reject)=>{asynchronus code})
 * Walk the dog
 * Do the dishes
 * Take out the trash
*/

function walkTheDog(){
//sometimes it may happen that the asynchronus code inside the
//promise wasn't able to accomplish then in that case we don't 
//want the promise to resolve we want it to be rejected
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog! 🐕");
            }
            else{
                reject("You didn't walk the dog!");
            }
        },2500);
    });
}
//We need to catch the error thrown when a promise is rejected
//for that we have to use the .catch(error=>{code}) 
//If a promise is rejectde during a method chaining of promises
//then all the other promises after the rejected promises are not executed
function doTheDishes(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve("You cleaned the dishes!");
        },3000);
    });
}

function takeOutTrash(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const tookOutTrash = false;
            if(tookOutTrash){
                resolve("You took out the trash!");
            }
            else{
                reject("You didn't took out the trash!");
            }
        },500);
    });
}

// walkTheDog().then(value=>{
//     console.log(value);
//     return doTheDishes().then(value=>{
//         console.log(value);
//         return takeOutTrash().then(value=>{
//             console.log(value);
//             console.log("All the task are finished!");
//         })
//     })
// })

//This is still like the callback hell we have a better method


// walkTheDog().then(value=>{console.log(value); return takeOutTrash()})
//             .then(value=>{console.log(value); return doTheDishes()})
//             .then(value=>{console.log(value); console.log("All the chores are finished!")})
//             .catch(error=>{console.error(error)});
 

/**async/await = async = makes a fuction return a promise
 *               await = makes a function wait for a promise
 *               
 *               Allows you to writ asynchronus code in a 
 * synchornus manner async doesn't have resolve or reject parameters
 * Everything after await is placed in an event queue*/    

async function doChores(){
    try{
        const walkTheDogResult = await walkTheDog();
        console.log(walkTheDogResult);

        const doTheDishesResult = await doTheDishes();
        console.log(doTheDishesResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    }
    catch(error){
        console.error(error);
    }
}

doChores();