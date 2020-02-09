const COORDS = 'coords';
const KEY = '3f51a4348e6cf50d758920ef4f66e6c7';
const icon = document.querySelector('.weather__icon');
const city = document.querySelector('.weather__city');
const temp = document.querySelector('.weather__temp');

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
  ).then(function(response) {
    return response.json();
  }).then(function(json){
    const CITY_NAME = json.name;
    const TEMP_NOW = Math.round(json.main.temp);
    const ICON_ID = json.weather[0].icon;
    const ICON_URL = `http://openweathermap.org/img/wn/${ICON_ID}@2x.png`;
    icon.src = ICON_URL;
    city.innerText = `${CITY_NAME}`;
    temp.innerText = `${TEMP_NOW}°C`;
  });
}

function handleGeoSucces(position) {
  const crd = position.coords;
  const lat = crd.latitude;
  const lon = crd.longitude;
  const coordsObj = {
    latitude : lat,
    longitude : lon
  };
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  getWeather(lat, lon);
}

function handleGeoError(err) {
  console.warn(`ERROR ${err.code}: ${err.message}`);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const coords = localStorage.getItem(COORDS);
  if(coords === null){
    askForCoords();
  }else{
    const parseCoords = JSON.parse(coords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
