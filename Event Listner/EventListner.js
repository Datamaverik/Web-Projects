/**eventListner = Listens for specific events to create interactive
 *                web pages. 
 *                evetns include: clicks, mouseover, mouseout
 *                .addEventListner(event, arrow function);  
 *                events: keydown, keyup  
 */

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn")

myBtn.addEventListener("click", (event)=>{
    myBox.style.backgroundColor="tomato";
    myBox.textContent="Ouch! 🤕";
})

myBtn.addEventListener("mouseover",event=>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="Whacha doin? 🙄"
})

myBtn.addEventListener("mouseout",event=>{
    myBox.style.backgroundColor="lightgreen";
    myBox.textContent="Hey Buddy 😃"
})