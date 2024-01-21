const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "9746d16daefe53f9f358984c8144a90f";

weatherForm.addEventListener("submit",async event=>{
    event.preventDefault();
    console.log(event);
    const city = cityInput.value;
    try{
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
    }
    catch(error){
        console.error(error);
        displayError(error);
    }
})

async function getWeatherData(city){
    
    const {lat: lat, lon: lon} = await getCoordinates(city);
    console.log({lat,lon});
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Couln't fetch weather data, Try enter a valid city");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    console.log(data);
    const {name: city,
        main: {temp, humidity},
        weather: [{description, id}]}=data;
    card.textContent = "";
    card.style.display="flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent=city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    tempDisplay.textContent=`${(temp-273.15).toFixed(1)}℃`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);

    humidityDisplay.textContent=`Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descDisplay.textContent=description;
    descDisplay.classList.add("descDisplay");
    card.appendChild(descDisplay);

    weatherEmoji.textContent=getWeatherEmoji(id);
    weatherEmoji.classList.add("weatherEmoji");
    card.appendChild(weatherEmoji)
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >=200 && weatherId<300):
            return "⛈️"
        case (weatherId >=300 && weatherId<400):
            return "🌧️"
        case (weatherId >=500 && weatherId<600):
            return "⛈️"
        case (weatherId >=600 && weatherId<700):
            return "🌨️"
        case (weatherId >=700 && weatherId<800):
            return "🌫️"
        case (weatherId ==800):
            return "☀️"
        case (weatherId >=801 && weatherId<810):
            return "☁️"
        default:
            return "❓"
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent="";
    card.style.display="flex";
    card.appendChild(errorDisplay);
}

async function getCoordinates(city){
    const coordinateUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
    const response2 = await fetch(coordinateUrl);
    const [firstResult] = await response2.json();

    if(!firstResult){
        throw new Error("The coordinates for the given location couldn't be found");
    }
    const {lat, lon} = firstResult;
    return {lat, lon};
}