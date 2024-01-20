/*These are like nested structures in C. You can use dot (.)
    operator multiple times to access the inner properties*/

const person = {
    fullname: "Levi Ackerman",
    age: 32,
    job:{
        regiment: "Scout",
        position: "Captain",
    },
    adderss:{
        country: "India",
        city: "Bombay",
        locality: "Nalasupara",
    },
}

//we can use for loop to iterate over the entire properties of the
//sub objects within an object

for(let i in person.adderss){
    console.log(person.adderss[i]);
}

for(let i in person.job){
    console.log(person.job[i]);
}

class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.adderss=new Address(...address);
    }
}

class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

const person1=new Person("Sheryash Verma",19,"Parikrama marg","Ayodhya","India");

console.log("Address:");
for(let i in person1.adderss){
    console.log(person1.adderss[i]);
}

//ARRAY OF OBJECTS
 
const fruits =[{name:"Apple",color:"red",calories: 95},
               {name:"Orange",color:"Orange",calories: 45},
               {name:"Banana",color:"Yellow",calories: 105},
               {name:"Kiwi",color:"Green",calories: 159},
               {name:"Pineapple",color:"Yellow",calories: 37}];

const YellowFruits=fruits.filter(fruit=>{
    //Here we can see we dont't have to use paranthesis for the
    //arguments while using the arrow function: (ele)=>{..logic..}
    //we can do directly: ele=>{..logic..}
    if(fruit.color=="Yellow")
    return true;
    else
    return false;
});

console.log(YellowFruits);

const HighestCalorie=fruits.reduce((accumulator,fruit)=>{
    return (accumulator.calories>fruit.calories)?accumulator:fruit;
})

console.log(HighestCalorie);