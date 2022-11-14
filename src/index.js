import "./styles.css";
var available_colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "magenta",
  "brown",
  "black",
  "cyan",
  "pink",
  "purple",
  "orange"
];
var available_shapes = [
  "square",
  "rectangle",
  "triangle-up",
  "triangle-down",
  "triangle-bottom-left",
  "triangle-bottom-right",
  "triangle-top-left",
  "triangle-top-right"
];
document.getElementById("change-color").addEventListener("click", function () {
  var nextcolor = available_colors[Math.floor(Math.random() * 11)];
  document.getElementsByClassName(
    "container"
  )[0].style.backgroundColor = nextcolor;
});
document.getElementById("change-shape").addEventListener("click", function () {
  var next_shape =
    available_shapes[Math.floor(Math.random() * available_shapes.length)];
  document.getElementById("shaper").setAttribute("class", next_shape);
});
