window.addEventListener('scroll', makeNavSticky)

const nav = document.getElementById("navigation");
const navOffset = nav.offsetTop;

function makeNavSticky() {
  window.pageYOffset >= navOffset
    ? nav.classList.add("nav-fixed")
    : nav.classList.remove("nav-fixed");
}

