const nav = document.getElementById("navigation");
const navOffset = nav.offsetTop;

window.addEventListener("scroll", makeNavSticky);

function makeNavSticky() {
  window.pageYOffset >= navOffset
    ? nav.classList.add("nav-fixed")
    : nav.classList.remove("nav-fixed");
}
