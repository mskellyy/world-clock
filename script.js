// Vancouver Date/Time

let vanElement = document.querySelector("#van");
let vanDateElement = vanElement.querySelector(".date");
let vanTimeElement = vanElement.querySelector(".time");
let vanTime = moment().tz("Canada/Pacific");

vanDateElement.innerHTML = vanTime.format("MMMM Do YYYY");
vanTimeElement.innerHTML = vanTime.format("h:m:ss [<small>]A[</small>]");

// New York Date/Time

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format(
  "h:m:ss [<small>]A[</small>]"
);
