let selector = document.getElementById("weather");
const URL =
  "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=44000&country=FR&lang=fr&key=9e36524247a047c9975899232e83ad0b";

fetch(URL)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    selector.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      showVelibStation(
        selector,
        response.data[i].datetime,
        response.data[i].weather.icon,
        response.data[i].max_temp
      );
    }
  })
  .catch((error) => console.error(error));

const showVelibStation = (selector, date, icon, max_temp) => {
  selector.innerHTML += `
      <div class="day">
          <h2>${date}</h2>
          <img src="https://www.weatherbit.io/static/img/icons/${icon}.png" alt="">
          <p>T max : ${max_temp}°</p>
      </div>
  `;
};
