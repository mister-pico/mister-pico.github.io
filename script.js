function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (pos == 670) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

function createGrid() {
  let width = 1280 px;
  let height = 720 px;
  let gridTile = "<div class='square'></div>";
  let message = "";

  for (var i = 0; i < (width * height); i++) {
    message = message.concat(gridTile);
  }

  document.getElementById("grid-parent").innerHTML = message;
}