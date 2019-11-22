const pins = document.getElementsByClassName("location-pin");
const locationNames = document.getElementsByClassName("location-name");

for (let n = 0; n < pins.length; n++) {
  pins[n].addEventListener("mouseover", () => {
    locationNames[n].classList.add("underline");
  });
  pins[n].addEventListener("mouseout", () => {
    locationNames[n].classList.remove("underline");
  });
  locationNames[n].addEventListener("mouseover", () => {
    pins[n].classList.add("scale-pin");
  });
  locationNames[n].addEventListener("mouseout", () => {
    pins[n].classList.remove("scale-pin");
  });
}

window.addEventListener('scroll', makeNavSticky)

const nav = document.getElementById("navigation");
const navOffset = nav.offsetTop;

function makeNavSticky() {
  window.pageYOffset >= navOffset
    ? nav.classList.add("nav-fixed")
    : nav.classList.remove("nav-fixed");
}


$(document).ready(function() {
  $(".slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    swipe: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
