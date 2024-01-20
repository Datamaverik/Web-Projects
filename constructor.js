/*constructor: its a special method for defining the properties 
                and methods of objects.
                it makes a reusable object. By convention we
                make the first letter of the constructor as
                capital.*/

function Car(make,model,year,color){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.drive=()=> console.log("You drive the "+this.model);
}

const car1=new Car("Ford","Mustang",2024,"Black");
const car2=new Car("Dodge","Charger",2010,"Black");

car1.drive();
console.log(car1.make);
console.log(car1.model);
car2.drive();
console.log(car2.make);
console.log(car2.model);