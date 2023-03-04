let navBar = document.getElementById("navbar");
let flow = document.getElementById("flow");

navBar.addEventListener('click',() => flow.classList.toggle("fin"));

document.addEventListener('click', function(event) {
  if (!flow.contains(event.target) && event.target !== navBar) {
    flow.classList.remove("fin");
  }
});
