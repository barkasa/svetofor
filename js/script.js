// const timeoutId = setTimeout(function () {
//   console.log("I've been called!");
// }, 3000); // 3 sec
// //setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
// setTimeout(function () {
//   console.log("You are cancelled!");
//   clearTimeout(timeoutId);
// }, 1000);
// Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения.
// метод отменяет таймаут, ранее установленный вызовом setTimeout()

// setInterval(function () {
//   console.log("I've been called!");
// }, 1000);
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

// let count = 0;

// const intervalId = setInterval(function () {
//   count++;
//   if (count >= 5) {
//     clearInterval(intervalId);
//   }
//   console.log("I've been called here!");
// }, 1000);

//-----------------

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log("I've been called!");
//   }, 500 * (i + 1));
// }

// начиная с красного цвета менять цвета светофора по кругу
// с интервалом в 5 сек
const circles = document.querySelectorAll(".circle");

const color = ["red", "yellow", "green"];
const lightState = {
  activeColor: "",
};

function run() {
  circles[2].classList.remove(color[2]);
  circles[0].classList.add(color[0]);
  lightState.activeColor = color[0];

  lightState.timeoutYellow = setTimeout(function () {
    circles[0].classList.remove(color[0]);
    circles[1].classList.add(color[1]);
    lightState.activeColor = color[1];
  }, 2000);

  lightState.timeoutGreen = setTimeout(function () {
    circles[1].classList.remove(color[1]);
    circles[2].classList.add(color[2]);
  }, 4000);

  lightState.timeoutRed = setTimeout(run, 6000);
}

run();

function go() {
  const isRed = document.getElementsByClassName("red").length;
  const isYellow = document.getElementsByClassName("yellow").length;
  const isGreen = document.getElementsByClassName("green").length;

  if (isRed || isYellow) {
    console.log("dead");
  } else if (isGreen) {
    console.log("success");
  }
}
function goFast() {
  if (lightState.activeColor === "green") {
    console.log("success");
  } else {
    console.log("dead");
  }
}
document.getElementsByClassName("btn")[0].addEventListener("click", go);

function stop() {
  clearTimeout(lightState.timeoutGreen);
  clearTimeout(lightState.timeoutYellow);
  clearTimeout(lightState.timeoutRed);
}

document.querySelectorAll(".btn")[1].addEventListener("click", stop);
