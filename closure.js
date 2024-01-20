/*closure: A fuction defined inside of another function, the inner
           function has access to the variables and scope of outer
           function. Allow for private variables and state 
           maintenance used frequently in JS frameworks: React, Vue, Angular
*/

function createGame(n){
    let score =n;
    
    increaseScore=(points)=>{
        score+=points;
        console.log("+"+points+"pts");
    }
    decreaseScore=(points)=>{
        score-=points;
        console.log("-"+points+"pts");
    }
    getScore=()=>{
        return score;
    }

    return {increaseScore:increaseScore,decreaseScore:decreaseScore,getScore:getScore};
}

const game=createGame(3);

console.log(game.getScore()+"pts");
game.increaseScore(6);
game.decreaseScore(2);
console.log(game.getScore()+"pts");