// Vancouver Date/Time
function updateVanTime() {
  let vanElement = document.querySelector("#van");
  let vanDateElement = vanElement.querySelector(".date");
  let vanTimeElement = vanElement.querySelector(".time");
  let vanTime = moment().tz("Canada/Pacific");

  vanDateElement.innerHTML = vanTime.format("MMMM Do YYYY");
  vanTimeElement.innerHTML = vanTime.format("h:m:ss [<small>]A[</small>]");
}

updateVanTime();
setInterval(updateVanTime, 1000);

// New York Date/Time

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format(
  "h:m:ss [<small>]A[</small>]"
);

// Paris Date/Time

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:m:ss [<small>]A[</small>]");
