/*Date() = This is an object which gives you current date and time
            in this format: (year, month, day, hour, minute, second, ms)
            we can change the current date and time and during the
            duration of the whole program it'll consider the given
            date and time as current and perform operations.
*/

//current date and time
const date1=new Date()
console.log(date1);

//changing date and time: Method 1
const date2=new Date(2017,0,1,4,0,0);
console.log(date2);

//changing date and time: Method 2
const date3=new Date("2019-07-16T06:00:00.000Z");
//T for time in hours:minutes:seconds.millisecondsZ Z is for time in UTC
console.log(date3);

//We have many types of funtion with Date() object

const year=date1.getFullYear();
const month=date1.getMonth();
const day=date1.getDate();
const hour=date1.getHours();
const minutes=date1.getMinutes();
const seconds=date1.getSeconds();
const dayOfWeek=date1.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

//We can even use the set() method to change all the above variables

date1.setDate(16);
date1.setMonth(7);
date1.setFullYear(2027);
date1.setHours(18);

console.log(date1.getDay());
console.log(date1.getDate());
console.log(date1.getMonth());
console.log(date1.getHours());

//We can even compare the dates 