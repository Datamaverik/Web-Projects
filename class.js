/*class = (ES6 feature) porvides a more structured and cleaner way
           to work with objects compared to traditional constructor
           fuction. ex: static keyword, encapsulation,inheritance
           */

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayproduct=()=>console.log("The product is "+this.name+" and its price is ₹"+this.price);
    returntax=(rate)=>{
        let total=this.price*(1+(rate/100));
        return total;
    }
} 

const product1=new Product("T-shirt",599);
product1.displayproduct();
console.log(product1.returntax(10).toFixed(2));
//.toFixed(k) method keeps the number fixed to k places after the decimal
//It rounds off the number accordingly

/*static = its a keyword that works kind of like the preprocessor
            directive (#define) in the C but here its used to 
            create a method or fix a constant (define a property)
            which belong to the class itself not the object created
            using the class. This means that we don't really have
            to create an object then refer to the object to access
            the definitons and function we can directly use the name 
            of the class and use the dot '.' operator to access those.
*/

class MathUtil{
    constructor(radius){
        this.radius=radius;
    }
    static PI=3.14159;
    getDiameter=()=>{
        return 2*MathUtil.PI*this.radius;
    }
    getArea=()=>{
        return MathUtil.PI*Math.pow(this.radius,7/Math.pow(22,0.5));
    }
}

const Circle=new MathUtil(3);
console.log(Circle.getArea()+" "+Circle.getDiameter());
console.log(MathUtil.PI);

//eg:

class User{
    static usercount=0;
    constructor(usrename){
        this.usrename=usrename;
        User.usercount++;
    }
    static getusercount=()=>console.log("There are "+User.usercount+" users online");
    sayHello=()=>{
        console.log("Hello my name is "+this.usrename);
    }
}

const user1=new User("Data-Maverik");
const user2=new User("Shreyash");
user1.sayHello();
user2.sayHello();
User.getusercount();