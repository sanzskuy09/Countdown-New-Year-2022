const textDay = document.getElementById("day");
const textHours = document.getElementById("hours");
const textMinutes = document.getElementById("minutes");
const textSeconds = document.getElementById("seconds");

function countdown() {
  const newYear = `1 Jan 2022`;
  const newDate = new Date(newYear);
  const currentDate = new Date();

  const counter = newDate - currentDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const getDay = Math.floor(counter / day);
  const getHours = Math.floor((counter % day) / hour);
  const getMinutes = Math.floor((counter % hour) / minute);
  const getSeconds = Math.floor((counter % minute) / second);

  textDay.innerHTML = getDay;
  textHours.innerHTML = times(getHours);
  textMinutes.innerHTML = times(getMinutes);
  textSeconds.innerHTML = times(getSeconds);
  console.log(counter);
}

function times(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(() => {
  countdown();
}, 1000);
