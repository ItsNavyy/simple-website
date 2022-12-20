function changeColor() {
  var heading = document.querySelector('h1');
  heading.style.color = '#f00';
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('button');
  button.addEventListener('click', changeColor);
});
