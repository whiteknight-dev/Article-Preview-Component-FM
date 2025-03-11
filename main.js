const cardFooter = document.querySelector(".card__footer");
const cardShare = document.querySelector(".card__share");
const primaryButton = document.querySelector(".primary");
const secondaryButton = document.querySelector(".secondary");

primaryButton.addEventListener("click", function () {
  cardFooter.classList.add("hidden");
  cardShare.classList.remove("hidden");
});

secondaryButton.addEventListener("click", function () {
  cardShare.classList.add("hidden");
  cardFooter.classList.remove("hidden");
});
