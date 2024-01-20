/* inheritance = allows a new class to inherit the methods and 
properties from an already existing class
(parent => child) it helps in the reusability
of the code. The child classes can inherit as
well as */

/* super() = it is a keyword which is used with the child classes
            to reuse the constructor of the parent class in the
            child classes. Basically it's like whatever you are 
            passing in super it will go to the constructor of the 
            parent classes and its codes will be implemented in
            the child classes.*/

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    alive=true;
    eat=()=>console.log("This "+this.name+" is eating");
    sleep=()=>console.log("This "+this.name+" is sleeping");
    move(speed){console.log("This "+this.name+" can run, its speed is"+speed+"km/h");}
}
class Rabbit extends Animal{
    constructor(name,age,characteristic,speed){
        super(name,age);
        this.characteristic=characteristic;
        this.speed=speed;
    }
    run=()=>{
        console.log(this.name+" is running");
        super.move(this.speed);
    }
}
class Lion extends Animal{
    constructor(name,age,characteristic,speed){
        super(name,age);
        this.characteristic=characteristic;
        this.speed=speed;
    }
    hunting=()=>{
        console.log(this.name+" is hunting");
        super.move(this.speed);
    }
}
class Cheetah extends Animal{
    constructor(name,age,characteristic,speed){
        super(name,age);
        this.characteristic=characteristic;
        this.speed=speed;
    }
    hide=()=>{
        console.log(this.name+" is hiding");
        super.move(this.speed);
    }
}

//We can see that we don't have rewrite the eat() and sleep()
//lines in the other classes thus providing reusability and also
//saves our time. 

const rabbit=new Rabbit("Rabbit",1,"Herbivore",35);
const lion=new Lion("Lion",17,"Carnivore",55);
const cheetah=new Cheetah("Cheetah",14,"Carnivore",75);

console.log(rabbit.alive);
lion.eat();
cheetah.sleep();
lion.hunting();
cheetah.hide();
rabbit.run();

console.log("The animal is "+lion.name+" it is "+lion.age+" years old, it is a "+lion.characteristic);
console.log("The animal is "+rabbit.name+" it is "+rabbit.age+" years old, it is a "+rabbit.characteristic);
console.log("The animal is "+cheetah.name+" it is "+cheetah.age+" years old, it is a "+cheetah.characteristic);

