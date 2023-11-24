// Vancouver Date/Time
function updateVanTime() {
  let vanElement = document.querySelector("#van");
  let vanDateElement = vanElement.querySelector(".date");
  let vanTimeElement = vanElement.querySelector(".time");
  let vanTime = moment().tz("Canada/Pacific");

  vanDateElement.innerHTML = vanTime.format("dddd MMMM Do");
  vanTimeElement.innerHTML = vanTime.format("h:mm:ss [<small>]A[</small>]");
}

updateVanTime();
setInterval(updateVanTime, 1000);

// New York Date/Time
function updateNewYorkTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd MMMM Do");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateNewYorkTime();
setInterval(updateNewYorkTime, 1000);

// Paris Date/Time
function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("dddd MMMM Do");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateParisTime();
setInterval(updateParisTime, 1000);

// Select drop down

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#inject-new-city");
  citiesElement.innerHTML = `<div class="city" id="van">
        <div>
          <h2 class="city-name">${cityName}</h2>
          <div class="date">${cityTime.format("dddd MMMM Do")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>`;
}

let citySelectElement = document.querySelector("#citySelect");
citySelectElement.addEventListener("change", updateCity);
