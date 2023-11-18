function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let mexicoElement = document.querySelector("#mexico");
  let mexicoDateElement = mexicoElement.querySelector(".date");
  let mexicoTimeElement = mexicoElement.querySelector(".time");
  let mexicoTime = moment().tz("America/Mexico_City");

  mexicoDateElement.innerHTML = mexicoTime.format("MMMM Do YYYY");
  mexicoTimeElement.innerHTML = mexicoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
