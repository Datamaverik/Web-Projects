/* DOM = Document Object Model
         Object {} that represents the page you see in the web
         browser and provides you with an  API to interact with it.
         Web browser constructs the DOM when it loads an HTML
         document, and structures all the elements in a tree-like
         representation. Javascript can acess the DOM dynamically
         change the content, structure, and style of a web page

         The body object has a lot of methods which we can change
         dynamically eg: background, title, head (h1), etc

element selectors = Methods used to target and manipulate HTML
                    elements. They allow you to select one or 
                    multiple HTML elments from DOM

1. document.getElementById() = it returns a single element 
                                if found otherwise returns NULL

2. document.getElemntsClassName() = it is something like the 
                                    getElemntById() but it uses
the class name, hence it can return a collection of HTML elements
having the same class, it will use indexing for the collection.

3. document.getElementsByTagName() = it is something like the
                                    getElementsByClassName()
it'll return a collection of HTML elements with matching "tag-name"
instead of the class name. It'll return NULL if no matching tag-name
elements are found.
    
4. document.querySelector() = it'll take class name or id name or
                                tag name but it'll not return an
entire collection of the HTML elements with the matching query
instead it'll return the first element in your HTML file with the
matching query. It'll return NULL if no HTML element is found with
the matching query.                                

5. document.querySelectorAll() = it is just like the getElementsClassName()
                                 but it returns a NODELIST instead
of the HTML collection. NODELIST is static (meaning if the DOM structure
changes, like some elements are added, removed, modified the NODELIST
doesn't reflect those changes automatically) but the HTML collection
is live(meaning if the DOM structure changes, those changes will
be reflected in the new HTML collection).

*/

const heading=document.getElementById("my-heading");
heading.style.fontFamily="verdana";

const games=document.getElementsByClassName("my-games");
//We can't use forEach() method with the collection of HTML elements
//so we convert it into an array using Array class then use the 
//forEach() method
Array.from(games).forEach(game=>{
    game.style.backgroundColor="grey";
    game.style.fontSize="3rem";
    game.style.fontFamily="noir";
})

const h4Elements=document.getElementsByTagName("h4");
const liElements=document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.style.fontFamily="Verdana";
    h4Element.style.color="blue";
}
for(let liElement of liElements){
    liElement.style.backgroundColor="grey";
}

const element=document.querySelector(".my-games");
//for class name just as in CSS here also we use '.' as a prefix
//for tag names and id names write their names inside the quotes
element.style.backgroundColor="yellow";
//the first element with the class name "my-games" is selected.