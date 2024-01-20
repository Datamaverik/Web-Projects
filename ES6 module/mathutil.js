/*ES6 Moudle = An external file that contains reusable code that 
               can be imported into other javascript files it
               can contain variables, classes , functions ... 
               and more we have to use the keyword export in the
               file form where we are exporting the content 
               infront of the fucntions and classes etc which we
               want to export and we have use the keyword import
               and object destructuring in the file in which we
               want to import the fuctions we have to specify the
               type:"module" in the <script> tag of the html body */

export const PI=3.14159;

export function getCircumference(radius){
    return 2*PI*radius;
}

export function getArea(radius){
    return PI*radius*radius;
}

export function getVolume(radius){
    return (4/3)*PI*radius*radius;
}