/**classList = Element property in Javascript used to interact with
 *              an element's list of classes (CSS classes).
 *              It allows us to make reusable classes for many
 *              elements across the webpage
 * 
 * add()
 * remove()
 * toggle(Remove if present, Add if not)
 * replace(oldClass, newClass)
 * contains()
 */

const myButton = document.getElementById("mybtn");

myButton.addEventListener("click",event=>{
    event.target.classList.add("enabled");
    event.target.classList.toggle("hover");
})

myButton.addEventListener("mouseout",event=>{
    event.target.classList.remove("enabled");
    //event.target.classList.remove("hover"); instead we can use toggle
    event.target.classList.toggle("hover");
})

myButton.addEventListener("mouseover",event=>{
    //event.target.classList.add("hover");
    event.target.classList.toggle("hover");
})
