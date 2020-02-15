<<<<<<< HEAD
const clock_text = document.querySelector('.clock__text'),
      day_text = document.querySelector('.day__text');

function getTime(){
  const today = new Date();
  const year = today.getFullYear() - 2000;
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hours = today.getHours();
  const mins = today.getMinutes();
  const seconds = today.getSeconds();
  day_text.innerText = `${year}. ${
                          month<10 ? `0${month}`:month}. ${
                          day<10 ? `0${day}`:day}.`;

  clock_text.innerText = `${hours<10 ? `0${hours}`:hours}:${
                            mins<10 ? `0${mins}`:mins}:${
                            seconds<10 ? `0${seconds}`:seconds}`;

}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
=======
const clock_text = document.querySelector('.clock__text'),
      day_text = document.querySelector('.day__text');

function getTime(){
  const today = new Date();
  const year = today.getFullYear() - 2000;
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hours = today.getHours();
  const mins = today.getMinutes();
  const seconds = today.getSeconds();
  day_text.innerText = `${year}. ${
                          month<10 ? `0${month}`:month}. ${
                          day<10 ? `0${day}`:day}.`;

  clock_text.innerText = `${hours<10 ? `0${hours}`:hours}:${
                            mins<10 ? `0${mins}`:mins}:${
                            seconds<10 ? `0${seconds}`:seconds}`;

}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
>>>>>>> 01e18bc804fee0fd474e14ef615514a55500eef4
