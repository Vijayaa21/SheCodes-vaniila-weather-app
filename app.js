let newDate = new Date();
let daYs = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let daY = document.querySelector("#day");
let daYes = daYs[newDate.getDay()];
let houR = newDate.getHours();
if (houR < 10) {
  houR = `0${houR}`;
}
let miN = newDate.getMinutes();
if (miN < 10) {
  miN = `0${miN}`;
}
daY.innerHTML = `${daYes}    ${houR}:${miN}`;

function searchCity(city) {
  let apiKey = "534360e007e0a5b20997e4664a33ded6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}
function showWeather(response) {
  document.querySelector("h3").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#descrip").innerHTML = response.data.weather[0].main;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#floatingInput").value;
  searchCity(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

searchCity("New York");
