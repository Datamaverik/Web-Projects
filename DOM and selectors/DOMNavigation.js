/**DOM Navigation = The process of navigating through the structre
 *                  of an HTML document using Javascript.
 * .firstElementChild
 * .lastElementChild
 * .nextElementSibling
 * .previousElementsSibling
 * .parentElement
 * .children
 */

const ulElements=document.querySelectorAll("ul");

ulElements.forEach(ulElement=>{
    const firstChild=ulElement.firstElementChild;
    firstChild.style.backgroundColor="yellow";
})

const element=document.getElementById("fruits");
const firstChild1=element.firstElementChild;
firstChild1.style.color="red";

const ele = document.getElementById("desserts");
const lastChild=ele.lastElementChild;
lastChild.style.color="Green";

const ulElements1=document.querySelectorAll("ul");

ulElements1.forEach(ulEle=>{
    lastBornChild=ulEle.lastElementChild;
    lastBornChild.style.fontFamily="noir pro";
})


const element2=document.getElementById("cake");
const nextSibling=element2.nextElementSibling;
//sibling next to the id one is selected
nextSibling.style.fontFamily="Asphalts Brush";


const elements3=document.getElementById("milkshakes");
const previousSibling=elements3.previousElementSibling;
//sibling before the id one is selected
previousSibling.style.fontSize="2rem";


const element4=document.getElementById("potato");
const parent=element4.parentElement;
//parent of the potato child is selected
parent.style.color="red";


const element5=document.getElementById("fruits");
const children=element5.children;
//when we use getElementById() we get an HTML collection since
//HTML collection do not have built in forEach() method so we convert
// it into array using the Array class
Array.from(children).forEach(child=>{
    child.style.fontSize="2rem";
})