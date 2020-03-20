class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.sunrise = document.getElementById("w-sunrise");
    this.sunset = document.getElementById("w-sunset");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.max_temp = document.getElementById("w-max-temp");
    this.min_temp = document.getElementById("w-min-temp");
    this.desc = document.getElementById("w-desc");
    this.wind = document.getElementById("w-wind");
    this.cloud = document.getElementById("w-cloud");
    this.rain = document.getElementById("w-rain");
    this.icon = document.getElementById("w-icon");
  }

  paint(weather) {
    let description = weather.weather["0"].description;

    function titleCase(desc) {
      var splitStr = desc.toLowerCase().split(" ");
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(" ");
    }

    console.log(weather);
    this.desc.textContent = `${titleCase(description)}`;
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.sunrise.textContent = `Sunrise: ${getTime(
      weather.sys.sunrise,
      weather.timezone
    )}`;
    this.sunset.textContent = `Sunset: ${getTime(
      weather.sys.sunset,
      weather.timezone
    )}`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°K`;
    this.max_temp.textContent = `Max Temp: ${weather.main.temp_max}°K`;

    this.min_temp.textContent = `Min Temp: ${weather.main.temp_min}°K`;

    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather["0"].icon}.png`
    );
  }
}
