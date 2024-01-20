//------------Example-1------------

//STEP 1 Create the element
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h1");
const newH3 = document.createElement("h1");

//STEP 2 add attributes/ properties
newH1.textContent="I like Games!";
newH1.id="myH1";
newH1.style.color="blue";
newH1.style.textAlign="center";
newH2.style.color="red";
newH2.style.textAlign="center";
newH2.textContent="I want to build gaming PC";
newH3.textContent="I want to play Resident Evil 4";
newH3.style.color="green";
newH3.style.textAlign="center";

//STEP 3 append or prepend the element to DOM
document.getElementById("box4").append(newH1);
const box2=document.getElementById("box2");
document.body.insertBefore(newH2,box2);
// we did .body because box is the child element of the body
// we have inserted newH2 before box2

const boxes=document.querySelectorAll(".box");
//if id is not given to the boxes we can use query selector to create
// a NODELIST of all the elements with a specific class name and use
// the class name and indices to insert our newElement before the currentElement
document.body.insertBefore(newH3,boxes[2]);

//STEP 4 Remove HTML Element
/**To do this we need to select the direct parent of the element
 * which we are trying to remove we can use any type of selector 
 * which we want. Remove the comment line to see the effect.
 */
//document.getElementById("box4").removeChild(newH1);