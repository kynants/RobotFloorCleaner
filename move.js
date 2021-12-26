// Source: https://plnkr.co/edit/kjEMr49wI0YFMQsf0iuC?p=preview&preview
let angle = 0,
    img = document.getElementById('robot');

function leftArrowPressed() {
  let element = document.getElementById("robot");
  element.style.left = parseInt(element.style.left) - 20 + 'px';
  angle = 270;
  img.className = "rotate"+angle;
}

function rightArrowPressed() {
  let element = document.getElementById("robot");
  element.style.left = parseInt(element.style.left) + 20 + 'px';
  angle = 90;
  img.className = "rotate"+angle;
}

function upArrowPressed() {
  let element = document.getElementById("robot");
  element.style.top = parseInt(element.style.top) - 20 + 'px';
  angle = 0;
  img.className = "rotate"+angle;
}

function downArrowPressed() {
  let element = document.getElementById("robot");
  element.style.top = parseInt(element.style.top) + 20 + 'px';
  angle = 180;
  img.className = "rotate"+angle;
}

function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
  }
}

function docReady() {
  window.addEventListener('keydown', moveSelection);
}