// var response = fetch ("https://api.openweathermap.org/geo/1.0/direct?q=San%20Diego&limit=5&appid=d91f911bcf2c0f925fb6535547a5ddc9");
// console.log(response); true

// Api call to get the latitude and longitude of city user typed in
const mysearch = document.getElementById("usersearch")
var lat;
var lon;
var usersearch;
var current;

var hotcold = document.querySelector("#temp")
var humid = document.querySelector("#Humidity")
var wind_speed = document.querySelector("#wind")
var sunny = document.querySelector("#UVI")




// You are going to take the lat and lon from that city and post it in this API to get the weather of that city

const searchButton = document.getElementById('search-btn')
searchButton.addEventListener ('click', function (){
    var city = mysearch.value 
fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
.then( (response) => response.json() ).then(data => { 
    console.log(data)
    lat = data[0].lat
    console.log(data[0].lat)
    lon = data[0].lon
  
    
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
    .then( (response) => response.json() ).then(data => { 
        console.log (data)
        current = {temp: Math.round((data.current.temp - 273.15)* 9/5 + 32) , humidity: data.current.humidity, uvi: data.current.uvi, wind_speed: data.current.wind_speed}
        console.log(current)
        hotcold.textContent = "Temp: " + current.temp + " F" 
        humid.textContent = "Humidity " + current.humidity
        wind_speed.textContent ="WindSpeed " + current.wind_speed
        sunny.textContent = "UVI " + current.uvi


    })
console.log (data)
})
})

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentCity(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

//API get Location
// When user clicks the search button after they type in the city they want
// Then you are going to store that value of the user's city into a variable
//Then take that variable and pass it into the api 

// API get Weather
// once you get the lat and lon from the first api call
//Then you are going to store those in a variable 
//THen call them in the second API


// //Fetch Example

// fetch('www.google.com').then( (response) => response.json() ).then(data => {
//     //in here is where you are going to store data in to variables 
//     console.log(data)

// })