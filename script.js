import {Weather} from "./main.js";
const search = document.querySelector("#search");
const input = document.querySelector("input");
const body = document.querySelector("body");
const content = document.querySelector("#content");
const celcius = document.querySelector("#celcius");
const Farenheit = document.querySelector("#Farenheit");
const degC = document.querySelector("#degC");
const degF = document.querySelector("#degF");
var weatherTemp;
async function getWeatherReport(){
  let locationName = input.value;
      // we wait for the reponse to be back from the server
  let apiCall = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+locationName+"&appid=40e234e2597df078968ac6ad5ed42be8");
  let weatherReport = await apiCall.json();
  let weatherDescription = weatherReport.weather[0].main;
  let description = weatherReport.weather[0].description;
  displayBackground(weatherDescription);
  main = weatherReport.main;
  displayTemperatureInCelcuis(weatherReport.main, description);/*
  celcius.style = "display:block";
  Farenheit.style = "display:block";*/
}
search.addEventListener("click", getWeatherReport);
function displayBackground(weatherDescription){
  if(weatherDescription === "Drizzle" || weatherDescription === "Thunderstorm") weatherDescription = "rain";
  body.style.cssText = "background-image: url(../images/"+weatherDescription+".jpg);";
}
function displayTemperatureInCelcuis(main, description){
  content.textContent = ""; /* clearing up the content *?
  /* we have to convert the default kelvin temperature to celcius */
  let temperature = Math.floor(main.temp - 273.15);
  let max_temperature = Math.floor(main.temp_max - 273.15);
  let min_temperature = Math.floor(main.temp_min - 273.15);
  let feels_like_temperature =  Math.floor(main.feels_like - 273.15);
  let temp = document.createElement("div");
  let weatherInfo = document.createElement("div");
  let weatherDescription = document.createElement("div");

  temp.textContent = temperature + degC.innerHTML;
  temp.style.cssText = "font-size: 200px;";
  weatherInfo.textContent = max_temperature+degC.innerHTML + "/"+ min_temperature+degC.innerHTML +" Feels like "+ feels_like_temperature+degC.innerHTML;
  weatherInfo.style.cssText = "font-size: 90px;";
  weatherDescription.textContent = description;
  weatherDescription.style.cssText = "font-size: 45px;";
  content.appendChild(temp);
  content.appendChild(weatherInfo);
  content.appendChild(weatherDescription);
}

function celciusToFarenheit(){
  content.textContent = ""; /* clearing up the content *?
  /* we have to convert the default kelvin temperature to celcius */
  let temperature = Math.floor((main.temp * 1.8) + 32);
  let max_temperature = Math.floor((main.temp_max * 1.8) + 32);
  let min_temperature = Math.floor((main.temp_min * 1.8) + 32);
  let feels_like_temperature =  Math.floor((main.feels_like * 1.8 ) + 32);
  let temp = document.createElement("div");
  let weatherInfo = document.createElement("div");
  let weatherDescription = document.createElement("div");

  temp.textContent = temperature + degF.innerHTML;
  temp.style.cssText = "font-size: 200px;";
  weatherInfo.textContent = max_temperature+degF.innerHTML + "/"+ min_temperature+degF.innerHTML +" Feels like "+ feels_like_temperature+degF.innerHTML;
  weatherInfo.style.cssText = "font-size: 90px;";
  weatherDescription.textContent = description;
  weatherDescription.style.cssText = "font-size: 45px;";
  content.appendChild(temp);
  content.appendChild(weatherInfo);
  content.appendChild(weatherDescription);
}
