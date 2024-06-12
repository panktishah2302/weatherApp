let windSpeed = document.querySelector('.windSpeed');
let humidity = document.querySelector('.humidity');
let temperature = document.querySelector('.temperature');
let condition = document.querySelector('.condition');
let cname = document.querySelector('.name');
let time = document.querySelector('.time');
let img = document.querySelector('.weather-icon img');
let search = document.querySelector('.search');

function searchCity() {
  console.log(search.value);
  getData(`https://api.weatherapi.com/v1/current.json?key=1b50301babff448282625741240906&q=${search.value}&aqi=yes`);
  search.value = ""; 
}

async function getData(url) {
  const response = await fetch(url);
  let data = await response.json();
  img.src = data.current.condition.icon;
  img.alt = data.current.condition.text;
  cname.textContent = data.location.name;
  time.textContent = data.location.localtime;
  temperature.textContent = data.current.temp_c + '°C';
  condition.textContent = data.current.condition.text;
  windSpeed.textContent = data.current.wind_kph + ' Km/h';
  humidity.textContent = data.current.humidity + '%';
}
