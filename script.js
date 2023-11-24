// Vancouver Date/Time

let vanElement = document.querySelector("#van");
let vanDateElement = vanElement.querySelector(".date");
let vanTimeElement = vanElement.querySelector(".time");
let vanTime = moment().tz("Canada/Pacific");

vanDateElement.innerHTML = vanTime.format("MMMM Do YYYY");
vanTimeElement.innerHTML = vanTime.format("h:m:ss [<small>]A[</small>]");
