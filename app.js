const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location event
document.getElementById("w-change-btn").addEventListener("click", function() {
  let city = document.getElementById("city").value;

  let state = document.getElementById("state").value;

  weather.changeLocation(city, state);

  // set Location in LS

  storage.setLocationData(city, state);

  getWeather();
});

// weather.changeLocation("Birmingham", "uk");

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

function getTime(unix, timezone) {
  let timezoneAdjustedUNIX = unix + timezone;

  let unixTimeMilliSecs = timezoneAdjustedUNIX * 1000;

  console.log(timezoneAdjustedUNIX);

  const date = new Date(unixTimeMilliSecs);

  let hours = "0" + date.getUTCHours();

  let mins = "0" + date.getUTCMinutes();

  let formattedTime = hours.substr(-2) + ":" + mins.substr(-2);

  return formattedTime;
}
