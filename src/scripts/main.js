AOS.init();
//Pega a data do evento
const eventDate = new Date("Apr 18, 2025 19:00:00");
const eventTimeStamp = eventDate.getTime();

//contador até a data do evento
const time = setInterval(function () {
  //pega o tempo atual
  const now = new Date();
  const nowTimeStamp = now.getTime();

  //pega o tempo restante
  const timeToEvent = eventTimeStamp - nowTimeStamp;

  //tempo em milisegundos
  const days = 1000 * 60 * 60 * 24;
  const hours = 1000 * 60 * 60;
  const minutes = 1000 * 60;
  const seconds = 1000;

  //transforma o tempo restante em dias, horas, minutos e segundos
  const daysToEvent = Math.floor(timeToEvent / days);
  const hoursToEvent = Math.floor((timeToEvent % days) / hours);
  const minutesToEvent = Math.floor((timeToEvent % hours) / minutes);
  const secondsToEvent = Math.floor((timeToEvent % minutes) / seconds);

  //insere o tempo restante na tela
  document.getElementById(
    "contador"
  ).innerHTML = `O maior evento de tecnologia do Brasil começa em ${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

  if (timeToEvent < 0) {
    clearInterval(time);
    document.getElementById(
      "contador"
    ).innerHTML = `O maior evento de tecnologia do Brasil já aconteceu!`;
  }
}, 10);

//exibir texto ao carregar página

window.onload = function () {
  document.getElementById(
    "contador"
  ).innerHTML = `O maior evento de tecnologia do Brasil começa em 0d 0h 0m 0s`;
};
