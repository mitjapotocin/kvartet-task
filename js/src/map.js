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
