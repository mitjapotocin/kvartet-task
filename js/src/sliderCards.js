const cards = document.getElementsByClassName("card");
const cardButton = document.getElementsByClassName("card-header");

for (let n = 0; n < cards.length; n++) {
  cardButton[n].addEventListener("click", () => {
    cards[n].classList.contains("card-opened")
      ? cards[n].classList.remove("card-opened")
      : cards[n].classList.add("card-opened");
  });
}
