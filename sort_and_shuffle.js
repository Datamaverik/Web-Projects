/*sort() = method used to sort elements of an array in place.
           It sorts elements as strings in lexicographic order,
           meaning as in dictionary order. We use different 
           techniques to modify sort() method to sort numbers
           or alphbetical strings
*/
const people = [{name:"Yuji Itadori",age: 17, gpa: 8.5},
                {name:"Megumi Fushiguro",age:18, gpa: 9.5},
                {name:"Nobara",age:16,gpa: 9.1},
                {name:"Gojo Saturo",age:21,gpa:10}];

// sorting with numbers(ascending)

people.sort((a,b)=>a.age-b.age);
console.log(people);

//sorting with numbers(descending)

people.sort((a,b)=>b.gpa-a.gpa);
console.log(people);

// sorting with name

people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);

//Its advisable to use a dediated shuffle function instead of just
//modifying the sort as: people.sort((a,b)=>Math.floor(Math.random()*2+1)-1);
//it'll prove to be inefficient for large number of data

const cards =['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const random=Math.floor(Math.random()*i+1);
        [array[i],array[random]]=[array[random],array[i]];
    }
}