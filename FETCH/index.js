/**fetch = function used for making HTTP requests to fectch resources
 *          (JSON style data, images, files)
 *          Simplifies asynchronous data fetching in JS and used
 *          for interacting with APIs to retrieve and send
 *          data asynchornously over the web.
 *          fetch(url, {options})
 *          method: "GET" = to get some data
 *          method: "POST" = to send some data
 *          method: "DELETE" to remove some data from the database
 */


// We can do the below using async and await
// fetch("https://api.attackontitanapi.com/characters")
//     .then(response=> {
//         if(!response.ok){
//             throw new Error("Couldn't fetch resource!")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.results))
//     .catch(error=>console.error(error));


//if fetching of the resources was okay then the status code
// will be 200 and ok: true
//if the fetching was unseccessful then staus will be 404 and ok: false


fetchData();

async function fetchData(){
    try{
        const response = await fetch("https://api.attackontitanapi.com/characters");
        //fetch() returns a promist, so use await
        if(!response.ok){
            throw new Error("Couldn't fetch data!");
        } 
        const data = await response.json();
        //.json() also returns a promise so use await
        console.log(data.results);
        const characters = document.getElementById("characters");
        characters.innerHTML="";
        data.results.forEach(character =>{
            const option = document.createElement("a");
            option.textContent=character.name;
            option.onclick = () => displayCharacterDetails(character);
            characters.appendChild(option);
        });
    }
    catch(error){
        console.error(error);
    }
}

function fetchCharacter(){
    document.getElementById("characters").classList.toggle("show");
}

function displayCharacterDetails(character){
    const displayCharacterDetails = document.getElementById("display-character");
    const displayStats = document.getElementById("display-stats");

    const attributes = [
         "Age", "Gender", "Height", "Occupation", "Residence", "Status"
    ];

    displayCharacterDetails.innerHTML = "";
    displayStats.innerHTML = "";

    attributes.forEach(attribute =>{
        const attributeDiv = document.createElement("div");
        attributeDiv.classList.add("attribute-div");

        const attributeName = document.createElement("p");
        attributeName.classList.add("attribute-name");

        const attributeValue = document.createElement("p");
        attributeValue.classList.add("attribute-value");

        switch (attribute.toLowerCase()){
            case "age":
                attributeName.textContent = "Age:";
                attributeValue.textContent = character.age;
                break;
            case "gender":
                attributeName.textContent = "gender:";
                attributeValue.textContent = character.gender;
                break;
            case "height":
                attributeName.textContent = "height:";
                attributeValue.textContent = character.height;
                break;
            case "occupation":
                attributeName.textContent = "occupation:";
                attributeValue.textContent = character.occupation;
                break;
            case "residence":
                attributeName.textContent = "residence:";
                attributeValue.textContent = character.residence;
                break;
            case "status":
          attributeName.textContent = "status:";      
                attributeValue.textContent = character.status;
                break;       
        }
        attributeDiv.appendChild(attributeName);
        attributeDiv.appendChild(attributeValue);

        displayStats.appendChild(attributeDiv);
    })

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");

    const imageValue = document.createElement("img");
    imageValue.classList.add("image-value");
    imageValue.src = character.img;

    imageDiv.appendChild(imageValue);
    displayCharacterDetails.appendChild(imageDiv);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name-div");

    const nameValue = document.createElement("p");
    nameValue.classList.add("name-value");
    nameValue.textContent=character.name;

    nameDiv.appendChild(nameValue);
    displayCharacterDetails.appendChild(nameDiv);

    const attributes2 =["Roles","Species","Alias"];

    attributes2.forEach(attribute =>{
        const attributeDiv = document.createElement("div");
        attributeDiv.classList.add("attribute-div");

        const attributeName = document.createElement("p");
        attributeName.classList.add("attribute-name");

        const attributeValue = document.createElement("p");
        attributeValue.classList.add("attribute-value");

        switch(attribute.toLowerCase()){
            case "alias":
                attributeName.textContent = "alias:";
                if(character.alias.join(", ")){
                    attributeValue.textContent=character.alias.join(", ");
                }
                else{
                    attributeValue.textContent="---";
                }
                break;
            case "roles":
                attributeName.textContent = "roles:";
                if(character.roles.join(", ")){
                    attributeValue.textContent=character.roles.join(", ");
                }
                else{
                    attributeValue.textContent="---";
                }
                break;
            case "species":
                attributeName.textContent = "species:";
                if(character.species.join(", ")){
                    attributeValue.textContent=character.species.join(", ");
                }
                else{
                    attributeValue.textContent="---";
                }
                break;
        }
        attributeDiv.appendChild(attributeName);
        attributeDiv.appendChild(attributeValue);

        displayStats.appendChild(attributeDiv);
    })
    displayCharacterDetails.classList.toggle("show");
    displayStats.classList.toggle("show");
}
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0;i<dropdowns.length;i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}