import {PI, getArea,getCircumference,getVolume} from './mathutil.js';

console.log(PI);
const circumference=getCircumference(10);
const area=getArea(5);
const volume=getVolume(4);

console.log("The circumference is "+circumference.toFixed(2));
console.log("The area is "+area.toFixed(2));
console.log("The volume is "+volume.toFixed(2));