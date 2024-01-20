/*getters and setters are special method used when we have to
                       check the user given input whether its 
                       valid or not and if its valid then use 
                       those inputs in our logic as usual
getter = special method that makes a property readable
seeter = special method that makes a property writable*/

class Rectangle{
    constructor(height, width){
        this.height=height;
        this.width=width;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth;
        }
        else{
            console.error("Width must be a positive number!");
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.error("Height must be a positive number!");
        }
    }
    get width(){
        return this._width
    }
    get height(){
        return this._height
    }
    //with getters we can even add additional logic which wasn't
    //in the original constructor
    get area(){
        return this._height*this._width;
    }
}

const rectangle=new Rectangle(5,6);

rectangle.width=-12;
//we can change the parameters later on if they are invalid the 
//parameters will retain their old values and an error message will
//be displayed

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);