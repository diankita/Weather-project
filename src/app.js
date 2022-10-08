function getTemperatureBasedOnCoordinates(response) {
  let lat = response.data[0].lat;
  let lon = response.data[0].lon;
  let units = "metric";
  let apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let apiUrlTemp = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrlTemp).then(showTemperature);
}

function showTemperature(response) {
  let temperatureElement = document.querySelector("#degrees");
  temperatureElement.innerHTML = Math.round (response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let feelsLikeElement = document.querySelector("#feels-like");
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  console.log(response.data);

}

function searchCity(city) {
  let apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let apiUrlCoords = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  axios.get(apiUrlCoords).then(getTemperatureBasedOnCoordinates);
}

searchCity("London");
