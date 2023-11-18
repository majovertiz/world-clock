function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let mexicoElement = document.querySelector("#mexico");
  if (mexicoElement) {
    let mexicoDateElement = mexicoElement.querySelector(".date");
    let mexicoTimeElement = mexicoElement.querySelector(".time");
    let mexicoTime = moment().tz("America/Mexico_City");

    mexicoDateElement.innerHTML = mexicoTime.format("MMMM Do YYYY");
    mexicoTimeElement.innerHTML = mexicoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
    <div>
     <h2>${cityName}</h2>
     <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
     <div class="time">${cityTime.format("h:mm:ss ")}<small>${cityTime.format(
    "A"
  )}</small></div>
 </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
