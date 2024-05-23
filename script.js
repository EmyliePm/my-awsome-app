// search changes the current city
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
// format dates shows current day and time.
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
// on submitting form, change the current city (h1)
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
// changes the #current date inside paragraph to current date

// edit
// get the response temperature data from the API from the current city
function displayTemperature(response) {
  let temperatureCurrentElement = document.querySelector(
    "#current-temperature"
  );
  let temperature = Math.round(response.data.temperature.current);
  temperatureCurrentElement.innerHTML = temperature;
  let cityCurrentElement = document.querySelector("#current-city");
  cityCurrentElement.innerHTML = response.data.city;
}

// on event search - use the city as input value. Have to call API here for event to happen first?
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "94fea4075b9658cte3d8o7c065a17914";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
