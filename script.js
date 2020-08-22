import {Weather} from "./main.js";
const search = document.querySelector("#search");
const input = document.querySelector("input");
const body = document.querySelector("body");
const fahrenheit = document.querySelector("#Fahrenheit");
const celsius = document.querySelector("#celsius");
const content = document.querySelector("#content");
const degC = document.querySelector("#degC");
const degF = document.querySelector("#degF");
var weatherApp;

async function getWeatherReport(){
  let locationName = input.value;
      // we wait for the reponse to be back from the server
  try{
    let apiCall = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+locationName+"&appid=40e234e2597df078968ac6ad5ed42be8");
    let weatherReport = await apiCall.json();
    let weatherDescription = weatherReport.weather[0].main;
    let description = weatherReport.weather[0].description;
    let main = weatherReport.main;
    weatherApp = new Weather(main.temp, main.temp_min, main.temp_max, description, main.feels_like);
    displayBackground(weatherDescription);
    displayTemperatureInCelcuis();
    celsius.style = "display:block";
    fahrenheit.style = "display: block";
  }catch{
    alert("An Error occured");
  }
}

function displayBackground(weatherDescription){
  if(weatherDescription === "Drizzle" || weatherDescription === "Thunderstorm") weatherDescription = "rain";
  body.style.cssText = "background-image: url(../images/"+weatherDescription+".jpg);";
}

function displayTemperatureInCelcuis(){
  content.textContent = ""; /* clearing up the content *?
  /* we have to convert the default kelvin temperature to celsius */
  let temperature = Math.floor(weatherApp.get_temp() - 273.15);
  let max_temperature = Math.floor(weatherApp.get_temp_max() - 273.15);
  let min_temperature = Math.floor(weatherApp.get_temp_min() - 273.15);
  let feels_like_temperature =  Math.floor(weatherApp.get_feels_like() - 273.15);
  let temp = document.createElement("div");
  let weatherInfo = document.createElement("div");
  let weatherDescription = document.createElement("div");

  temp.textContent = temperature + degC.innerHTML;
  temp.style.cssText = "font-size: 200px;";
  weatherInfo.textContent = max_temperature+degC.innerHTML + "/"+ min_temperature+degC.innerHTML +" Feels like "+ feels_like_temperature+degC.innerHTML;
  weatherInfo.style.cssText = "font-size: 90px;";
  weatherDescription.textContent = weatherApp.get_description();
  weatherDescription.style.cssText = "font-size: 45px;";
  content.appendChild(temp);
  content.appendChild(weatherInfo);
  content.appendChild(weatherDescription);
}

function displayTemperatureInFahrenheit(){
  content.textContent = ""; /* clearing up the content *?
  let temperature = Math.floor((weatherApp.get_temp() * 1.8) - 459.67);
  let max_temperature = Math.floor((weatherApp.get_temp_max() * 1.8) - 459.67);
  let min_temperature = Math.floor((weatherApp.get_temp_min() * 1.8) - 459.67);
  let feels_like_temperature =  Math.floor((weatherApp.get_feels_like() * 1.8 ) - 459.67);
  let temp = document.createElement("div");
  let weatherInfo = document.createElement("div");
  let weatherDescription = document.createElement("div");

  temp.textContent = temperature + degF.innerHTML;
  temp.style.cssText = "font-size: 200px;";
  weatherInfo.textContent = max_temperature+degF.innerHTML + "/"+ min_temperature+degF.innerHTML +" Feels like "+ feels_like_temperature+degF.innerHTML;
  weatherInfo.style.cssText = "font-size: 90px;";
  weatherDescription.textContent = weatherApp.get_description();
  weatherDescription.style.cssText = "font-size: 45px;";
  content.appendChild(temp);
  content.appendChild(weatherInfo);
  content.appendChild(weatherDescription);
}

fahrenheit.addEventListener("click", displayTemperatureInFahrenheit);
celsius.addEventListener("click", displayTemperatureInCelcuis);
search.addEventListener("click", getWeatherReport);
