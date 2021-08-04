function main() {
  var grid = "";
  var columns = 64;
  var rows = 32;

  for (var i = 0; i < (columns * rows); i++) {
    grid = grid + "<div class=\"square\">p</div>"
  }

  document.getElementById("test").innerHTML = grid;

}