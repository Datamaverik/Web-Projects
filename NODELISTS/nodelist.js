/**NODELIST = staic collection of HTML elements by (id, class, element)
 *            They can be created by using the querySelectorAll()
 *            Similar to an array, but no (map, filter, reduce)
 *            NODELIST won't update to automatically reflect changes
 */

let buttons = document.querySelectorAll(".mybtns");

// Add HTML/CSS properties

buttons.forEach(button=>{
    button.style.backgroundColor="hsl(193, 100%, 67%)";
    button.textContent+="😊";
});

// Click event listener
// similarly we can use mouseover and mouseout by changing the event
// type in the addEventListener

buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor="lightgreen";
    })
    button.addEventListener("mouseout",event=>{
        event.target.style.backgroundColor="hsl(193, 100%, 67%)";
    })
})

// Adding a new HTML element 

// STEP 1 create the element
const newButton = document.createElement("button5");

// STEP 2 add the CSS and other properties or just mention the class
// so it'll automatically acquire the CSS prop. of that class
newButton.textContent="Button 5";
newButton.className="mybtns";

//STEP 3 append the newly created element to the parent 
let container = document.getElementById("btncontainer");
container.appendChild(newButton);

//STEP 4 NODELIST are static hence we have to manually reassign it
buttons= document.querySelectorAll(".mybtns");

console.log(buttons);

// Remove an element
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.remove();
        buttons=document.querySelectorAll(".mybtns");//updating NODELIST
        console.log(buttons);
    })
})