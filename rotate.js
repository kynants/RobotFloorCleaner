let angle = 0,
    img = document.getElementById('robot');

document.getElementById('button').onclick = function() {
  angle = (angle+90)%360;
  img.className = "rotate"+angle;
}

function leftArrowPressed() {
  let element = document.getElementById("robot");
  angle = 270;
  img.className = "rotate"+angle;
}

function rightArrowPressed() {
  let element = document.getElementById("robot");
  element.style.left = parseInt(element.style.left) + 20 + 'px';
}

function upArrowPressed() {
  let element = document.getElementById("robot");
  element.style.top = parseInt(element.style.top) - 20 + 'px';
}

function downArrowPressed() {
  let element = document.getElementById("robot");
  element.style.top = parseInt(element.style.top) + 20 + 'px';
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